fetch("drivers.json")
    .then(response => response.json())
    .then(data =>{
        const listContainer=document.getElementById("driver-list")
        const detailContainer=document.getElementById("driver-details")

        data.forEach(driver => {
            const button=document.createElement("button")
            button.textContent=driver.name;

            button.addEventListener("click",()=>{
                detailContainer.innerHTML=`
                <h2>${driver.name}</h2>
                <img src="${driver.image}" />
                <p><strong>Number: </strong>${driver.number}</p>
                <p><strong>Nationality: </strong>${driver.nationality}</p>
                <p><strong>Team: </strong>${driver.team}</p>
                <p><strong>Points: </strong>${driver.points}</p>
                <p><strong>Podiums: </strong>${driver.podiums}</p>
                `;
            });

            listContainer.appendChild(button);
        });
    })