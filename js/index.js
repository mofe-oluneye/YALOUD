// function signUp(event) {
//     // prevents page refresh
//     event.preventDefault();   
//     // triggers the spining animation
//     const spinItem = document.querySelector(".spin");
//     // spinItem.style.display = "inline-block";   
//      const getName = document.getElementById("name").value;
//     const getEmail = document.getElementById("email").value;
//     const getPassword = document.getElementById("password").value;
//     const getConfirm = document.getElementById("confirmPassword").value;   
//      // validation
//     if (getName === "" || getEmail === "" || getPassword === "" || getConfirm === "") {
//         Swal.fire({
//             icon: 'info',
//             text: 'All fields are required!',
//             confirmButtonColor: "#2D85DE"
//         })       
//          spinItem.style.display = "none";
//         return;
//     }    if (getConfirm !== getPassword) {
//         Swal.fire({
//             icon: 'warning',
//             text: 'Passwords don\'t match',
//             confirmButtonColor: "#2D85DE"
//         })
//         spinItem.style.display = "none";
//         return;
//     }
//     else {
//         // convert to form data
//         const signData = new FormData();
//         signData.append("name", getName);
//         signData.append("email", getEmail);
//         signData.append("password", getPassword);
//         signData.append("password_confirmation", getConfirm);        // request method
//         const signMethod = {
//             method: 'POST',
//             body: signData
//         }        // endpoint
//         const url = "https://cyrilyoruba.juadebgabriel.com/yorubalearning/api/register_admin";    
//             // callimg the api
//         fetch(url, signMethod)
//         .then(response => response.json())
//         .then(result => {
//             console.log(result)        

//                 if (result.status === "success") {
//                 Swal.fire({
//                     icon: 'success',
//                     text: `${result.message}`,
//                     confirmButtonColor: "#2D85DE"

//                 })         
//                        setTimeout(() => {
//                     location.href = "index.html"
//                 }, 4000)
//             }

//             else {
//                 Swal.fire({
//                     icon: 'info',
//                     text: `${result.message}`,
//                     confirmButtonColor: "#2D85DE"

//                 })
//                 spinItem.style.display = "none";
//             }        })
//         .catch(error => {
//             console.log('error', error)
//             Swal.fire({
//                 icon: 'info',
//                 text: `${result.message}`,
//                 confirmButtonColor: "#2D85DE"

//             })
//             spinItem.style.display = "none";
//         });
//     }} 

//     function logIn(event) {
//     event.preventDefault();   
//      const spinItem = document.querySelector(".spin");
//     spinItem.style.display = "inline-block";  
//       const getEmail = document.getElementById("email").value;
//     const getPassword = document.getElementById("password").value;   
//      if (getEmail === "" || getPassword === "") {
//         Swal.fire({
//             icon: 'info',
//             text: 'All fields are required!',
//             confirmButtonColor: "#2D85DE"

//         })     
//            spinItem.style.display = "none";
//         return;
//     }    else {
//         const signData = new FormData();
//         signData.append("email", getEmail);
//         signData.append("password", getPassword);        // this is for raw data
//         // const signData = JSON.stringify({
//         //     "email": getEmail,
//         //     "password": getPassword
//         // })    
//             const signMethod = {
//             method: 'POST',
//             body: signData
//         }       
//          const url = "https://cyrilyoruba.juadebgabriel.com/yorubalearning/api/admin_login";        fetch(url, signMethod)
//         .then(response => response.json())
//         .then(result => {
//             console.log(result)           
//              if (result.hasOwnProperty("email")) {
//                 localStorage.setItem("key", result.token)
//                 location.href = "dashboard.html"
//             }
//             else {
//                 Swal.fire({
//                     icon: 'info',
//                     text: `${result.message}`,
//                     confirmButtonColor: "#2D85DE"

//                 })
//                 spinItem.style.display = "none";
//             }        })
//         .catch(error => {
//             console.log('error', error)
//             Swal.fire({
//                 icon: 'info',
//                 text: `${result.message}`,
//                 confirmButtonColor: "#2D85DE"

//             })
//         });
//     }
// }// get dashboard api
// function dashboardApi() {
//     const category = document.getElementById("category");
//     const learn = document.getElementById("learnmat");
//     const sub = document.getElementById("subCat");
//     const quiz = document.getElementById("quiz");
//     const student = document.getElementById("student");
//     const admin = document.getElementById("adminId"); 
//        const getPageModal = document.querySelector(".pagemodal");
//     getPageModal.style.display = "block";    
//     const token = localStorage.getItem("key");
//     const dashItem = new Headers();
//     dashItem.append("Authorization", `Bearer ${token}`);  
//       const dashMethod = {
//         method: 'GET',
//         headers: dashItem
//     };    const url = `${baseUrl}/admin_dashboardapi`;   
//      fetch(url, dashMethod)
//     .then(response => response.json())
//     .then(result => {
//         console.log(result)    
//             category.textContent = `${result.total_number_of_categories}`;
//         learn.textContent = `${result.total_number_of_learningmaterial}`;
//         sub.textContent = `${result.total_number_of_subcategories}`;
//         quiz.textContent = `${result.total_number_of_quize}`;
//         student.textContent = `${result.total_number_of_students}`;
//         admin.textContent = `${result.admin_name}`;
//         getPageModal.style.display = "none";    })
//     .catch(error => console.log('error', error));
// }

// function logout() {
//     localStorage.clear();
//     location.href = "index.html";
// }

// const baseUrl = "https://cyrilyoruba.juadebgabriel.com/yorubalearning/api/admin";
 









// function studentModal(event) {
//     const students = document.querySelector(".allstudent");
//     event.preventDefault();    const getModal = document.getElementById("dash-modal");
//     getModal.style.display = "block";    const token = localStorage.getItem("key");
//     const dashItem = new Headers();
//     dashItem.append("Authorization", `Bearer ${token}`);    const dashMethod = {
//         method: 'GET',
//         headers: dashItem
//     };    let data = [];  
//       const url = `${baseUrl}/top_three_students`;  
//         fetch(url, dashMethod)
//     .then(response => response.json())
//     .then(result => {
//         console.log(result)   
//              if (result.length === 0) {
//             students.innerHTML = `<p class="text-center">No Records Found</p>`;
//             return;
//         }
//         else {
//             result.map((item) => {
//                 data += `
//                    <div class="search-card">
//                       <div class="d-flex justify-content-between">
//                         <p>Name</p>
//                         <p>${item.name}</p>
//                       </div>
//                       <div class="d-flex justify-content-between">
//                         <p>Email</p>
//                         <p>${item.email}</p>
//                       </div>
//                       <div class="d-flex justify-content-between">
//                         <p>Phone Number</p>
//                         <p>${item.phone_number}</p>
//                       </div>
//                       <div class="d-flex justify-content-between">
//                         <p>Position</p>
//                         <p>${item.position}</p>
//                       </div>
//                       <div class="d-flex justify-content-between">
//                         <p>Total</p>
//                         <p>${item.total_score}</p>
//                       </div>
//                    </div>
//                 `
//                 students.innerHTML = data;
//             })
//         }    })
//     .catch(error => console.log('error', error));
// }function closeDashModal() {
//     const getModal = document.getElementById("dash-modal");
//     getModal.style.display = "none";
// }function allStudent() {
//     const token = localStorage.getItem("key");
//     const dashItem = new Headers();
//     dashItem.append("Authorization", `Bearer ${token}`); 
//        const table = document.getElementById("table-id") 
//           const dashMethod = {
//         method: 'GET',
//         headers: dashItem
//     };   
//      let data = [];  
//        const url = `${baseUrl}/get_all_students`;  
//          fetch(url, dashMethod)
//     .then(response => response.json())
//     .then(result => {
//         console.log(result)       
//          if (result.length === 0) {
//             table.innerHTML = `<p class="text-center">No Records Found</p>`;
//             return;
//         }
//         else {
//             result.map((item) => {
//                 data += `
//                   <tr>
//                     <td>${item.name}</td>
//                     <td>${item.email}</td>
//                     <td>${item.phone_number}</td>
//                     <td>${item.total_score}</td>
//                     <td>${item.position}</td>
//                   </tr>
//                 `            
//                     table.innerHTML = data;
//             })
//         }    })
//     .catch(error => console.log('error', error));
// }


// function createCategory(event) {
//     event.preventDefault();    const spinItem = document.querySelector(".spin");
//     spinItem.style.display = "inline-block";    const getName = document.getElementById("cat").value;
//     const getImg = document.getElementById("imcat").files[0];  
//       if (getName === "" || getImg === "") {
//         Swal.fire({
//             icon: 'info',
//             text: 'All fields are required!',
//             confirmButtonColor: "#2D85DE"
//         })  
//      spinItem.style.display = "none";
//         return;
//     }    else {
//         const token = localStorage.getItem("key");
//         const dashItem = new Headers();
//         dashItem.append("Authorization", `Bearer ${token}`);     
//            const catData = new FormData();
//         catData.append("name", getName);
//         catData.append("image", getImg);      
//           const catMethod = {
//             method: 'POST',
//             headers: dashItem,
//             body: catData
//         };
//                 const url = `${baseUrl}/create_category`;     
//            fetch(url, catMethod)
//         .then(response => response.json())
//         .then(result => {
//             console.log(result)       
//                  if (result.status === "success") {
//                 Swal.fire({
//                     icon: 'success',
//                     text: `${result.message}`,
//                     confirmButtonColor: "#2D85DE"
//                 })               
//                  setTimeout(() => {
//                     location.reload();
//                 }, 4000)
//             }
//             else {
//                 Swal.fire({
//                     icon: 'info',
//                     text: `${result.message}`,
//                     confirmButtonColor: "#2D85DE"
//                 })             
//    spinItem.style.display = "none";
//             }
//         })
//         .catch(error => console.log('error', error));
//     }}function getCategoryList() {
//     const scroll = document.querySelector(".scroll-object");   
//      const token = localStorage.getItem("key");
//     const dashItem = new Headers();
//     dashItem.append("Authorization", `Bearer ${token}`);  
//       const catMethod = {
//         method: 'GET',
//         headers: dashItem,
//     };    let data = [];   
//      const url = `${baseUrl}/category_list`;    
//      fetch(url, catMethod)
//     .then(response => response.json())
//     .then(result => {
//         console.log(result)    
//             if (result.length === 0) {
//             scroll.innerHTML = `<p>No records found</p>`;
//             return;
//         }        else {
//             result.map((item) => {
//                 data += `
//                   <div class="search-card">
//                     <img src="${item.image}" alt="">
//                     <p>${item.name}</p>
//                     <div class="text-right">
//                       <button class="  update-button" onclick = "update(${item.id})">Update</button>
//                       <button class="delete-button" onclick = "deleteCategory(${item.id})">Delete</button>
//                     </div>
//                   </div>
//                 `
//                 scroll.innerHTML = data;
//             })
//         }
//     })
//     .catch(error => console.log('error', error));
// }




// function update(id) {
//     const getModal = document.getElementById("my-modal3"); 
//        localStorage.setItem("catId", id);
//     const name = document.getElementById("updateName")  
//       const token = localStorage.getItem("key");
//     const dashItem = new Headers();
//     dashItem.append("Authorization", `Bearer ${token}`); 
//        const catMethod = {
//         method: 'GET',
//         headers: dashItem,
//     };  
//       const url = `${baseUrl}/get_details?category_id=${id}`;  
//       fetch(url, catMethod)
//      .then(response => response.json())
//      .then(result => {
//         console.log(result)     
//            name.setAttribute("value", `${result.name}`);
//         getModal.style.display = "block";
//      })
//      .catch(error => console.log('error', error));
// }






// function updateCategory(event) {
//     event.preventDefault();  
//       const spinItem = document.querySelector(".spin2");
//     spinItem.style.display = "inline-block";   
//      const getName = document.getElementById("updateName").value;
//     const getImg = document.getElementById("updateImage").files[0];  
//       if (getName === "" || getImg === "") {
//         Swal.fire({
//             icon: 'info',
//             text: 'All fields are required!',
//             confirmButtonColor: "#2D85DE"
//         })     
//    spinItem.style.display = "none";
//         return;
//     }    else {
//         const token = localStorage.getItem("key");
//         const dashItem = new Headers();
//         dashItem.append("Authorization", `Bearer ${token}`);     
//            const myId = localStorage.getItem("catId");      
//              const catData = new FormData();
//         catData.append("name", getName);
//         catData.append("image", getImg);
//         catData.append("category_id", myId);      
//           const catMethod = {
//             method: 'POST',
//             headers: dashItem,
//             body: catData
//         };       
        
//          const url = `${baseUrl}/update_category`;   
//              fetch(url, catMethod)
//         .then(response => response.json())
//         .then(result => {
//             console.log(result)
//             if (result.status === "success") {
//                 Swal.fire({
//                     icon: 'success',
//                     text: `${result.message}`,
//                     confirmButtonColor: "#2D85DE"
//                 })         
//                        setTimeout(() => {
//                     location.reload();
//                 }, 4000)
//             }
//             else {
//                 Swal.fire({
//                     icon: 'info',
//                     text: `${result.status}`,
//                     confirmButtonColor: "#2D85DE"
//                 })
//                 spinItem.style.display = "none";
//             }
//         })
//         .catch(error => console.log('error', error));
//     }
// }  



// function deleteCategory(id){
//  const token = localStorage.getItem("key");
//    const dashItem = new Headers();
//    dashItem.append("Authorization", `Bearer ${token}`);
//    const catMethod = {
//     method: 'GET',
//     headers: dashItem,
//   };
//   const url = `${baseUrl}/delete_category/${id}`;
//    fetch(url, catMethod)
//   .then(response => response.json())
//     .then(result => {
//         console.log(result)
//         if (result.status === "success") {
//             Swal.fire({
//                    icon: 'success',
//                     text: `${result.message}`,
//                     confirmButtonColor: "#2D85DE"
//             })
//             setTimeout(() => {
//                 location.reload();
//             }, 4000)
//         }
//         else {
//               Swal.fire({
//                    icon: 'info',
//                     text: `${result.status}`,
//                     confirmButtonColor: "#2D85DE"
//             })
//             spinItem.style.display = "none";
//         }
//     })
//     .catch(error => console.log('error, error'));
// }





// function upDateAdmin(event) {
//   event.preventDefault();
//   const spinItem = document.querySelector(".spin");
//   spinItem.style.display = "inline-block";
//   const getName = document.getElementById("updateName").value;
//   const getEmail = document.getElementById("updateEmail").value;
//   if (getName === "" || getEmail === "") {
//     Swal.fire({
//       icon: "info",
//       text: "All fields are required!",
//       confirmButtonColor: "#2D85DE",
//     });
//     spinItem.style.display = "none";
//     return;
//   } 
//   else {
//     const token = localStorage.getItem("key");
//     const dashItem = new Headers();
//     dashItem.append("Authorization", `Bearer ${token}`);
//     const signData = new FormData();
//     signData.append("name", getName);
//     signData.append("email", getEmail);    const signMethod = {
//       method: "POST",
//       headers: dashItem,
//       body: signData,
//     };    
//     const url = `${baseUrl}/admin_update_profile`;
//     fetch(url, signMethod)
//       .then((response) => response.json())
//       .then((result) => {
//         console.log(result);       
//          if (result.status === "success") {
//           Swal.fire({
//             icon: "success",
//             text: `${result.message}`,
//             confirmButtonColor: "#2D85DE",
//           });
//           setTimeout(() => {
//             location.href = "index.html";
//           }, 4000);
//         } 
//         else {
//           Swal.fire({
//             icon: "info",
//             text: `${result.message}`,
//             confirmButtonColor: "#2D85DE",
//           });
//           spinItem.style.display = "none";
//         }
//       })    
//         .catch((error) => console.log("error", error));
//   }
// }

// function upDatePassword(event) {
//   event.preventDefault();  // triggers the spining animation
//   const spinItem = document.querySelector(".spin2");
//   spinItem.style.display = "inline-block";
//   const currentEmail = document.getElementById("updatePassEmail").value;
//   const newPassword = document.getElementById("updatePassword").value;
//   const getConfirm = document.getElementById("confirmPassword").value;  if (currentEmail === "" || newPassword === "" || getConfirm === "") {
//     Swal.fire({
//       icon: "info",
//       text: "All fields are required!",
//       confirmButtonColor: "#2D85DE",
//     });
//     spinItem.style.display = "none";
//     return;
//   }
//   if (getConfirm !== newPassword) {
//     Swal.fire({
//       icon: "warning",
//       text: "Passwords don't match",
//       confirmButtonColor: "#2D85DE",
//     });
//     spinItem.style.display = "none";
//     return;
//   } else {
//     const token = localStorage.getItem("key");
//     const dashItem = new Headers();
//     dashItem.append("Authorization", `Bearer ${token}`);
//     const myId = localStorage.getItem("catId");
//     const signData = new FormData();
//     signData.append("email", currentEmail);
//     signData.append("password", newPassword);
//     signData.append("password_confirmation", getConfirm);
//     const signMethod = {
//       method: "POST",
//       headers: dashItem,
//       body: signData,
//     };    const url = `${baseUrl}/admin_update_password`;
//     fetch(url, signMethod)
//       .then((response) => response.json())
//       .then((result) => {
//         console.log(result);
//         if (result.status === "success") {
//           Swal.fire({
//             icon: "success",
//             text: `${result.message}`,
//             confirmButtonColor: "#2D85DE",
//           });
//           setTimeout(() => {
//             localStorage.clear();
//             location.href = "index.html";
//           }, 4000);
//         }
//       })      
//       .catch((error) => console.log("error", error));
//   }
// }