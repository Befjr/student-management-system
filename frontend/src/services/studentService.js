import axios from "axios";

const API_URL = "http://52.66.80.17:8080/students";

export const getStudents = () => axios.get(API_URL);

export const addStudent = (student) => axios.post(API_URL, student);

export const updateStudent = (id, student) =>
  axios.put(`${API_URL}/${id}`, student);

export const deleteStudent = (id) =>
  axios.delete(`${API_URL}/${id}`);