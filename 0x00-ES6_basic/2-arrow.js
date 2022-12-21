export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
    const self = this;
    this.addNeighborhood = (newNeighborhood) => {
      // use ES6’s arrow syntax of the function
      self.sanFranciscoNeighborhoods.push(newNeighborhood);
      return self.sanFranciscoNeighborhoods;
    };
  }
