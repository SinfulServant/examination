import axios from "axios";
const url = 'https://my-json-server.typicode.com/SinfulServant/jsonplaceholder/db/';
const getQuestionsUrl = 'https://my-json-server.typicode.com/SinfulServant/jsonplaceholder/TESTS'

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

  //Change "_" to " "
  formatTitles(titles) {
    return titles.map((item) => {
      return item
        .split("")
        .map((letter) => {
          if (letter !== "_") return letter;
          else return " ";
        })
        .join("");
    });
  }

  //Change " " to "_"
  removeSpaces(inputString) {
    return inputString.replace(/ /g, "_");
  }

  async getTestQuestions() {
    const response = await axios.get(getQuestionsUrl)
    return response.data
  }
}

export default new ApiTests();
