import axios from "axios";
const url =
  "https://my-json-server.typicode.com/SinfulServant/jsonplaceholder/URLS";

class ApiResources {
  async getResources() {
    try {
      const response = await axios.get(url);
      const resources = await axios.get(response.data['resourcesForExamenator'])
      return resources.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new ApiResources();
