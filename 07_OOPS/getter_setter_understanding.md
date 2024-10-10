## Why Use Getters and Setters?
Control over property access and modification:
Jab aap directly properties set karte ho, toh aap bina kisi validation ya logic ke values ko assign kar rahe ho. Getters aur setters aapko zyada control dete hain, especially jab aapko properties ko access karte ya update karte waqt kuch specific logic apply karni ho.

Example:

Agar aapko ensure karna hai ki semester ki value 1-8 ke beech ho (valid semesters), toh aap setter mein check laga sakte ho.
Agar koi negative semester ya out-of-range value dene ki koshish kare, setter usko block kar sakta hai.
Code with Validation in Setter:

exmaple code:
set semester(value) {
    if (value < 1 || value > 8) {
        console.log('Invalid semester, must be between 1 and 8');
    } else {
        this._semester = value; // Only set if valid
    }
}

## Encapsulation (Data hiding):
Directly properties ko access karna object ke andar ki details ko expose kar deta hai, jo achha practice nahi hota. Getters aur setters ke saath aap internally control kar sakte ho ki property ko kaise access ya modify kiya jaye, bina directly internal variables ko expose kiye.

## Example:

Agar aap _semester ko private rakhna chahte ho, toh wo directly bahar se access nahi hoga. Bas get semester() method ke through hi access kar paoge.
Getter ka use karke aap proper format ya computed values return kar sakte ho.
Logic inside Getters and Setters:
Agar aapko koi additional logic lagani hai jaise format change karna, ya values ko modify karke dena, toh aap getter aur setter mein wo kar sakte ho. Direct property access se ye flexibility nahi milti.

Example:

Suppose aapko name ko uppercase mein return karna hai, toh getter ke andar ye logic laga sakte ho:
javascript
Copy code
get name() {
    return this._name.toUpperCase(); // Always return in uppercase
}

# Comparison:
## Without Getter/Setter                    	With Getter/Setter
  Direct property access and assignment     	Controlled access with custom logic if needed
  No validation or checks                 	    You can add validation, checks, and formatting
  No encapsulation (data hiding)	            Can hide internal data and expose only controlled access

## Conclusion:
Aap getter aur setter tab use karte ho jab aapko control chahiye ki property ko kaise set kiya jaye ya kaise read kiya jaye. Agar aapko simple read/write karna hai bina kisi additional logic ke, tab constructor aur direct property access bhi kaam karta hai