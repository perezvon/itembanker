import { SET_ACTIVE_PROJECT, BEGIN_IMPORT, INCREMENT_ID } from '../constants/actionTypes';

const initialState = {
  user: {
    name: 'Harold Purplecrayon',
    role: 'manager'
  },
  assignments: [{
    id: 1546547,
    project: 'Sample Project 1',
    type: 'Review',
    assignment: 'Written by Steve Steverson',
    number: 15
  }, {
    id: 4683476,
    project: 'ABC CO Item Writing',
    type: 'Write',
    assignment: 'Blueprint 1.1 Basics of Everything',
    dueDate: '05/15/2018',
    number: 4
  }, {
    id: 4433771,
    project: 'ABC CO Item Writing',
    type: 'Write',
    assignment: 'Blueprint 1.3 Cool Stuff',
    number: 6
  }],
  items: [{
    stem: 'This is a question, is it not?',
    optionA: 'yes',
    optionB: 'no',
    optionC: 'what?',
    optionD: 'uh-huh',
    revision: 1,
    project: 112233,
  }],
  projects: [{
    id: 123123,
    name: 'Sample Project 1',
    itemCount: 1234
  },{
    id: 112233,
    name: 'ABC CO Item Writing',
    itemCount: 44
  },{
    name: 'SuperProj3'
  },{
    name: 'SuperProj4'
  },{
    name: 'SuperProj5'
  },{
    name: 'SuperProj6'
  }],
  news: [{
    date: '08/01/2018',
    title: 'Everything is OK...',
    slug: 'everything-is-ok',
    content: 'Seriously, everything is pretty much OK.'
  }, {
    date: '07/12/2018',
    title: 'Everything is Awesome!',
    slug: 'everything-is-awesome',
    content: 'Don\'t you wish your application was awesome like me?'
  }],
  currentProject: '',
  location: '1.3+The+Homepage',
  nextId: 231245
};
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ACTIVE_PROJECT:
      const projectItems = state.items.filter(i => i.project === action.payload);
      return {...state, projectItems, currentProject: action.payload};
    case BEGIN_IMPORT:
      return {...state, items: [...state.items, action.payload]}
    case INCREMENT_ID:
      return {...state, nextId: action.payload}
    default:
      return state;
  }
};
export default rootReducer;
