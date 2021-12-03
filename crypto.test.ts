import {percentile} from "./main";
test("Test that the 90th percentile of 1-10 is 9",()=>{
    const numbers = [1,10,2,4,3,5,6,7,8,9]; // unsorted list
    expect(percentile(numbers,90)).toBe(9);
});