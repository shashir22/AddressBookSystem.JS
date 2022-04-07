class AddressBookJs{

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
      }
    
      //UC2 validating all the details

      get firstName() { return this._firstName; }
      set firstName(firstName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$"); //first letter should be capital and min 3 letters
        if (nameRegex.test(firstName))
          this._firstName = firstName;
        else
          throw "Invalid first Name";
      }
    
      
      get lastName() { return this._lastName; }
      set lastName(lastName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if (nameRegex.test(lastName))
          this._lastName = lastName;
        else
          throw "Invalid last Name";
      }
    
      
      get address() { return this._address; }
      set address(address) {
        let addressRegex = RegExp('^[0-9 A-Z]{1}[A-Z a-z 0-9]{1,}$');  //minimum four characters
        if (addressRegex.test(address))
          this._address = address;
        else
          throw "Invalid address ";
      }
    
         
      get city() { return this._city; }
      set city(city) {
        let cityRegex = RegExp("^[A-Za-z]{4,}$"); //minimum four characters
        if (cityRegex.test(city))
          this._city = city;
        else
          throw "Invalid city ";
      }
      
      get state() { return this._state; }
      set state(state) {
        let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
        if (stateRegex.test(state))
          this._state = state;
        else
          throw "Invalid state";
      }
    
     
      get zip() { return this._zip; }
      set zip(zip) {
        let zipRegex = RegExp("^[1-9]{3}[ ]*[0-9]{3}$");  //pin code of form 400 088 or 400088
        if (zipRegex.test(zip))
          this._zip = zip;
        else
          throw "Invalid zip ";
      }
    
      
      get phoneNumber() { return this._phoneNumber; }
      set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$"); //phone number should be of form 91 1234567891
        if (phoneRegex.test(phoneNumber))
          this._phoneNumber = phoneNumber;
        else
          throw "Invalid phone number";
      }
    
      
      get email() { return this._email; }
      set email(email) {                              //ac.xyz@gmail.com.in .xyz and .in are optional
        let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
        if (emailRegex.test(email))
          this._email = email;
        else
          throw "Invalid email";
      }
    
      toString() {
        return "first Name: " + this.firstName + ", last Name: " + this.lastName+ "\nAddress: " + this.address + ", City: " + this.city
        + ", State: " + this.state + " Zip: " + this.zip + ", \nPhoneNumber: " + this.phoneNumber + ", email: " + this.email;   
      }
    }

    // UC3 adding contact details to array 
    let contactDetailsArray = new Array();
    try {
            contactDetailsArray.push(new AddressBookJs("Rahul", "Prabu", "Ishwarnagar", "Banglore", "karanataka", "583229","91 8123351458", "Rahul@gmail.com"));
            contactDetailsArray.push(new AddressBookJs("Ravi", "Shastri", "Kochi", "Thrissur", "Kerala","123 456", "91 4653729473", "Ravi@gmail.com"));  
            contactDetailsArray.push(new AddressBookJs("Raj", "Jamadar", "Rajajinagr", "Banglore", "Karnataka","244 458", "91 9988776655", "Raj@gmail.com"));
            contactDetailsArray.push(new AddressBookJs("Porvi", "Karvi", "Marathahalli", "Bangalore", "Karnataka","564 999", "91 7584838389", "Porvi@gmail.com"));    
        }
    catch(e)
    {
      console.error(e);
    }
    Display();

    function Display()
    {
      contactDetailsArray.forEach((contact) => console.log(contact.toString()));
    }

  //UC4 find existing contact using name and edit it
   let index= contactDetailsArray.findIndex(contact=>contact.firstName == "Raj");
   contactDetailsArray[index].lastName="Jamadar";
   console.log("************************************************************************");
   console.log("After updating Addressbook: ");
   Display();
   

 //uc5 Removes an element from an array at specified index
 console.log("******************************************************************");
 contactDetailsArray.splice(index, 1);
 console.log("contacts after being deleted");
 Display();

 //UC6 find no of contacts
 let totalContacts=0;
function getCount(contactDetailsArray)
{
  if (contactDetailsArray != null)
      totalContacts++;
    return totalContacts;
}
contactDetailsArray.reduce(getCount,1);
console.log("Total number of contacts in contactdetails array : " + totalContacts);

//UC7 check for duplicate value
    let personContact = new AddressBookJs('Ganesh', 'Biradar', 'DDnagar', 'Mumbai', 'Maharastra', '678543', '91 1234567891', 'Ganesh@gmail.com');
    if(contactDetailsArray.some(e => e._firstname == "Raj"))
    console.log("Contact already Exists!");
    else
    {
    contactDetailsArray.push(personContact);
    console.log("Contact added succsefully");
    }
    console.log("Array: ",contactDetailsArray);


    //UC8 finding contacts by city
    let findByCity = contactDetailsArray.filter((e) => e._city == 'Banglore');
    console.log("Contacts by city: ",findByCity);
    //finding contacts by state
    let findByState = contactDetailsArray.filter((e) => e._state == 'Karnataka');
    console.log("Contacts by state: ",findByState);	

    //UC-9 view contact name by city and state
    console.log(contactDetailsArray.filter(contact => contact._city == "Kochi")
                              .map(contact => contact.firstName));
                        
    console.log(contactDetailsArray.filter(contact => contact._state == "Karnataka")
                               .map(contact => contact._firstName));

    //UC10-Get contact count by city and state
    console.log(contactDetailsArray.filter(contact => contact.city == "Kochi")
                          .reduce((count, contact) => contact.firstName ? ++count : count,0));
    //count by state
    console.log(contactDetailsArray.filter(contact => contact.state == "Karnataka")
                              .reduce((count, contact) => contact.firstName ? ++count : count, 0));
//UC11-Sorting entries alphabetically
console.log(contactDetailsArray.sort((a, b) => a.firstName.localeCompare(b.firstName)));
//UC12-Sorting contacts by city state and zip
console.log("Contact After sorting by city");
console.log(contactDetailsArray.sort((a, b) => a.city.localeCompare(b.city)))
console.log("Contact After sorting by state");
console.log(contactDetailsArray.sort((a, b) => a.state.localeCompare(b.state)));
console.log("Contact After sorting by zip");
console.log(contactDetailsArray.sort((a, b) => a.zip.localeCompare(b.zip)));