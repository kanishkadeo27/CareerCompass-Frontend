const tbody = document.querySelector('tbody');

const getColleges = async () => {
    let id = location.href.split('?')[1]?.split("=")[1];
    if(id === undefined){
        tbody.innerHTML = 'Can\'t find colleges now. Please try after some time';
        return;
    }

    let url = `http://localhost:3000/courses/${id}`;
    let data = await fetch(url);
    data = await data.json();

    if(data.error){
        tbody.innerHTML = 'Can\'t find colleges now. Please try after some time';
        return;
    }

    data.forEach((ele,i) => {
        tbody.innerHTML += `<tr>
            <td>${ele.instituteName}</td>
            <td>${ele.courseName}</td>
        </tr>`;
    });
    console.log(data);
}

getColleges();