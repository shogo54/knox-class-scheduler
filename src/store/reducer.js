import * as actionTypes from './actions';

const initialState = {
  currCourses: [],

  subjects: [
    {
      subject: "Africana Studies",
      subjectCode: "AFST",
    },
    {
      subject: "American Studies",
      subjectCode: "AMST",
    },
    {
      subject: "Anthoropology & Sociology",
      subjectCode: "ANSO",
    },
    {
      subject: "Art and Art History",
      subjectCode: "ART",
    },
    {
      subject: "Arts Administration",
      subjectCode: "AADM",
    },
    {
      subject: "Asian Studies",
      subjectCode: "ASIA",
    },
    {
      subject: "Biochemistry",
      subjectCode: "BCHM",
    },
    {
      subject: "Biology",
      subjectCode: "BIOL",
    },
    {
      subject: "Business and Management",
      subjectCode: "BUS",
    },
    {
      subject: "Chemistry",
      subjectCode: "CHEM",
    },
    {
      subject: "Chinese",
      subjectCode: "CHIN",
    },
    {
      subject: "Classics",
      subjectCode: "CLAS",
    },
    {
      subject: "Computer Science",
      subjectCode: "CS",
    },
    {
      subject: "Center for Teaching and Learning",
      subjectCode: "CTL",
    },
    {
      subject: "Dance",
      subjectCode: "DANC",
    },
    {
      subject: "Economics",
      subjectCode: "ECON",
    },
    {
      subject: "Educational Studies",
      subjectCode: "EDUC",
    },
  ], 

  courses: [
    {
      subject: "BUS",
      name: "Business Spanish",
      code: "BUS 209",
      img: "images/avatars/fgomez.jpg",
      faculty: "Fernando Gomez",
      credit: ".5",
      period: "5s",
      days: "Th",
    },
    {
      subject: "BUS",
      name: "Strategic Princ of Arts Admin",
      code: "BUS 215",
      img: "images/avatars/elizmetz.jpg",
      faculty: "Elizabeth Carlin Metz & John Spittell",
      credit: "1",
      period: "2",
      days: "MWF",
    },
    {
      subject: "BUS",
      name: "Intermediate Accounting I",
      code: "BUS 301",
      img: "images/avatars/jgomer.jpg",
      faculty: "Jeffrey Gomer",
      credit: "1",
      period: "3s",
      days: "TT",
    },
    {
      subject: "BUS",
      name: "Advanced Managerial Accounting",
      code: "BUS 312",
      img: "images/avatars/jgomer.jpg",
      faculty: "Jeffrey Gomer",
      credit: "1",
      period: "5s",
      days: "TT",
    },
    {
      subject: "BUS",
      name: "Managerial Finance",
      code: "BUS 333",
      img: "images/avatars/jspittell.jpg",
      faculty: "John Spittell",
      credit: "1",
      period: "4",
      days: "MWF",
    },
    {
      subject: "BUS",
      name: "Senior Seminar in Business & Management",
      code: "BUS 399",
      img: "images/avatars/jspittell.jpg",
      faculty: "John Spittell",
      credit: "1",
      period: "2s",
      days: "TT",
    },
    {
      subject: "CS",
      name: "Program Design & Methodology",
      code: "CS 142",
      img: "images/avatars/dbunde.jpg",
      faculty: "David Bunde",
      credit: "1",
      period: "2",
      days: "MWF",
    },
    {
      subject: "CS",
      name: "Applied Data Structures",
      code: "CS 220",
      img: "images/avatars/jspacco.jpg",
      faculty: "Jaime Spacco",
      credit: "1",
      period: "6",
      days: "MWTF",
    },
    {
      subject: "CS",
      name: "Software Engineering",
      code: "CS 322",
      img: "images/avatars/mmcgill.jpg",
      faculty: "Monica McGill",
      credit: "1",
      period: "5s",
      days: "TT",
    },
    {
      subject: "CS",
      name: "Cryptography & Computer Security",
      code: "CS 330",
      img: "images/avatars/dbunde.jpg",
      faculty: "David Bunde",
      credit: "1",
      period: "3",
      days: "MWF",
    },
    {
      subject: "CS",
      name: "Interactive Design",
      code: "CS 335",
      img: "images/avatars/jspacco.jpg",
      faculty: "Jaime Spacco & Tim Stedman",
      credit: "1",
      period: "3,4",
      days: "MW",
    },
    {
      subject: "CS",
      name: "Full-stack Web Dev Practicum",
      code: "CS 395E",
      img: "",
      faculty: "Staff",
      credit: "1",
      period: "2:40-5pm",
      days: "TT",
    },
  ],

};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.ADD_COURSE:
      const addedCourse = state.courses.find(course => course.code === action.courseCode);

      if(addedCourse.added == true){
        return state;
      }else{
        return {
          ...state,
          courses: state.courses.map((course) => {
            if(course.code === action.courseCode){
              return {
                ...course,
                added: true,
              }
            }else{
              return course
            }
          }),
          currCourses: state.currCourses.concat(addedCourse),
        }
      }
    
    case actionTypes.REMOVE_COURSE:
      return {
        ...state,
        courses: state.courses.map((course) => {
          if(course.code === action.courseCode){
            return {
              ...course,
              added: false,
            }
          }else{
            return course
          }
        }),
        currCourses: state.currCourses.filter(course => course.code !== action.courseCode)
      }
  }
  return state;
}

export default reducer;