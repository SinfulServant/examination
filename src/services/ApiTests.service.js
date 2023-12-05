import axios from "axios";
const url = 'https://my-json-server.typicode.com/SinfulServant/jsonplaceholder/db'

class ApiTests {

    async getTitles() {
        try {
          const response = await axios.get(url);
          const titles = Object.keys(response.data.TESTS);
          return titles;
        } catch (error) {
          throw error;
        }
      }
      

    getTestQuestions(){

    }
}

export default new ApiTests()
