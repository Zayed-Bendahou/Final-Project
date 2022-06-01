import axios from "axios";

const initialState = [];
axios.get('http://localhost:8080/api/offers')
.then(res => {
    initialState.push(res);
})

export default function reducer(state = initialState, action) {
    return state;
}