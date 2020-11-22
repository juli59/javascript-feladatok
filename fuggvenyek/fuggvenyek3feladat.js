const personDataLog = (p = {}) => {
    p.firstName = p.firstName || 'John'; 
    p.lastName = p.lastName || 'Doe'; 
    p.age = p.age || 33;
    console.log("My name is " + p.firstName + p.lastName + ". I'm " + p.age + " years old.");
    
}
    

    
    
