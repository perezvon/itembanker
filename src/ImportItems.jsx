import React, { Component } from 'react';
import XLSX from 'xlsx';
import { connect } from 'react-redux';
import { beginImport, incrementId } from './actions';

const mapStateToProps = state => {
  console.log(state);
  return { ...state };
};

const mapDispatchToProps = dispatch => {
  return  {
    beginImport: data => dispatch(beginImport(data)),
    incrementId: id => dispatch(incrementId(id))
  }
}

class ImportItems extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      data: []
    }
  }

  handleFileUpload = (e) => {
    e.preventDefault();
    const rABS = false;
    const reader = new FileReader();
    let f = this.fileInput.current.files[0];
    reader.onload = (e) => {
      let data = e.target.result;
      if(!rABS) data = new Uint8Array(data);
      let workbook = XLSX.read(data, {type: rABS ? 'binary' : 'array'});
      let worksheet = workbook.Sheets[workbook.SheetNames[0]];
      let sheetData = XLSX.utils.sheet_to_json(worksheet, {header:1});
      this.setState({data: sheetData});
    }
    if(rABS) reader.readAsBinaryString(f); else reader.readAsArrayBuffer(f);
  }

  handleImport = () => {
    let counter = this.props.nextId;
    let headers = this.state.data[0];
    let currentData = this.state.data.slice(2, this.state.data.length-1);
    currentData.forEach(item => {
      let itemData = {
        id: counter,
        project: this.props.currentProject,
        externalId: item[0],
        stem: item[1],
        optionA: item[2],
        optionB: item[3],
        optionC: item[4],
        optionD: item[5],
        correctOptions: item[6]
      }
      this.props.beginImport(itemData);
      counter++;
    })
    this.props.incrementId(counter);
  }

  render() {
    const { data } = this.state;
    let headers, tableData;
    if (data.length > 0) {
      headers = data[0];
      tableData = data.slice(2, data.length-1);
      tableData.forEach(item => {
        for (let i = 0; i < headers.length; i++) {
          if (!item[i]) item[i] = '';
        }
      })
    }
    return (
      <div>
        <h1>Import</h1>
        <form onSubmit={this.handleFileUpload}>
          <input type='file' ref={this.fileInput} />
          <button className='btn btn-primary'>Submit</button>
        </form>
        { data.length > 0 &&
          <div>
          <h2>{data.length} Questions ready for import</h2>
          <button className='btn btn-success' onClick={this.handleImport}>Import</button>
            <div className='table-responsive'>
              <table className='table table-striped table-bordered table-hover'>
                <tbody>
                  {headers && <tr>{headers.map(h => <th>{h}</th>)}</tr> }
                  {tableData && tableData.map(d => <tr>{d.map(el => <td>{el}</td>)}</tr>) }
                </tbody>
              </table>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImportItems);
