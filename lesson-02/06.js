let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
      country: "USA",
      city: "LA"
  }
};

let passportWithAddress2 = JSON.parse(JSON.stringify(passportWithAddress))
passportWithAddress2.address.city = "Bobryisk";

console.log(passportWithAddress.address.city);
console.log(passportWithAddress2.address.city);