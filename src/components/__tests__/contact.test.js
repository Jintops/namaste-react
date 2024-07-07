import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page Test case",()=>{
 
    
test("should load the contact as component",()=>{

    render(<Contact />)
    const heading=screen.getByRole("heading");
     
     expect(heading).toBeInTheDocument();
    
    })
    
    test("should load button inside the contact  component",()=>{
    
        render(<Contact />);
        // const button=screen.getByRole("button")
          const  button=screen.getByText("Submit")
         expect(button).toBeInTheDocument();
        
        })
    
        it("should load input name in the contact  component",()=>{
    
            render(<Contact />);
            // const button=screen.getByRole("button")
              const  input=screen.getByPlaceholderText("name")
             expect(input).toBeInTheDocument();
            
            })
        
            test("should load  all input name in the contact  component",()=>{
    
                render(<Contact />);
               
                  const  inputBoxes=screen.getAllByRole("textbox");
                 expect(inputBoxes.length).toBe(2);
                
                })
})
//you can use 'it' instead of 'test' ,both are same

        