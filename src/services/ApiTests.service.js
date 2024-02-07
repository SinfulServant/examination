import axios from "axios";
const url = 'https://my-json-server.typicode.com/SinfulServant/jsonplaceholder/db/';

class ApiTests {

  // get titles for AvailableTestsVue
  async getTitles() {
    try {
      const response = await axios.get(url);
      const titles = Object.keys(response.data.TESTS);
      return titles;
    } catch (error) {
      throw error;
    }
  }

  //Change "_" to " " for Array
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
  // Change "_" to " "
  replaceUnderscores(inputString) {
    return inputString.replace(/_/g, " ");
  }

  // get test by title of test
  async getTestQuestions(title) {
    const allTests = await axios.get(url)
    const urlToNeededTest = allTests.data.TESTS[this.removeSpaces(title)] 
    const neededTest = await axios.get(urlToNeededTest)
    return neededTest.data
  }
}

export default new ApiTests();
