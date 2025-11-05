//building a backend feature for a role-based access control system 
//  It reads the user role and account status, then gives appropriate messages.


// Use prompt() to simulate user input (you can hardcode inputs if running without a CLI):

//     Ask for user's role: "admin", "editor", "viewer"

//     Ask if the account is "active" or "suspended"

// Use if-else or switch to check:

//     If the account is "suspended" → Deny access

//     If active:

//         If role is "admin" → Log: "Full access granted"

//         If "editor" → Log: "Edit access granted"

//         If "viewer" → Log: "Read-only access granted"

//         Else → Log: "Unknown role"

// Use comparison/logical operators where needed

//     E.g., (role === 'admin' && status === 'active')

// End with a summary log

//     Log: “✅ Access check complete.”



console.log("Access control system initiated");

userRole = prompt("your role : ");
console.log("your role : ", userRole);

accountStatus = prompt("active or inactive");
console.log("account status: ", accountStatus)


if (accountStatus == "active"){
    if (userRole == "admin"){
        console.log("full access granted")
    }
    else if (userRole == "editor"){
        console.log("Edit access granted")
    }
    else if(userRole == "viewer"){
        console.log("only read access granted")
    }
    else {
        console.log("Unknown role")
    }
}

else {
    console.log("deny access")
}