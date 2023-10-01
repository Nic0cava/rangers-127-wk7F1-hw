//Function to get information from F1 API:
const getRacerData = async (season, round) => {
    try {
        const response = await axios.get(`http://ergast.com/api/f1/${season}/${round}/driverStandings.json`);
        //console.log(response);
        //console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}



// Set up html search
const year = document.querySelector("#season")
const round = document.querySelector("#round")
const search = document.querySelector("#search-btn")

// Set up Event Listener to get information from API:
search.addEventListener("click", async (event) => {
    console.log("search button clicked")
    console.dir(year.value)
    console.dir(round.value)
    event.preventDefault()
    // Get result data:
    const result = await getRacerData(year.value, round.value)
    console.log(result.MRData)

    // P1 results
    const p1name = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName
    //console.log(p1name)
    const p1nationality = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.nationality
    //console.log(p1nationality)
    const p1sponsor = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].name
    //console.log(p1sponsor)
    const p1points = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points
    //console.log(p1points)

    document.getElementById("p1name").innerHTML = `${p1name}`
    document.getElementById("p1nationality").innerHTML = `${p1nationality}`
    document.getElementById("p1sponsor").innerHTML = `${p1sponsor}`
    document.getElementById("p1points").innerHTML = `${p1points}`

    // P2 results
    const p2name = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.givenName
    const p2nationality = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.nationality
    const p2sponsor = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Constructors[0].name
    const p2points = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].points

    document.getElementById("p2name").innerHTML = `${p2name}`
    document.getElementById("p2nationality").innerHTML = `${p2nationality}`
    document.getElementById("p2sponsor").innerHTML = `${p2sponsor}`
    document.getElementById("p2points").innerHTML = `${p2points}`

    // P3 results
    const p3name = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.givenName
    const p3nationality = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.nationality
    const p3sponsor = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Constructors[0].name
    const p3points = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].points

    document.getElementById("p3name").innerHTML = `${p3name}`
    document.getElementById("p3nationality").innerHTML = `${p3nationality}`
    document.getElementById("p3sponsor").innerHTML = `${p3sponsor}`
    document.getElementById("p3points").innerHTML = `${p3points}`

    // P4 results
    const p4name = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.givenName
    const p4nationality = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.nationality
    const p4sponsor = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Constructors[0].name
    const p4points = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].points

    document.getElementById("p4name").innerHTML = `${p4name}`
    document.getElementById("p4nationality").innerHTML = `${p4nationality}`
    document.getElementById("p4sponsor").innerHTML = `${p4sponsor}`
    document.getElementById("p4points").innerHTML = `${p4points}`

    // P5 results
    const p5name = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.givenName
    const p5nationality = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.nationality
    const p5sponsor = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Constructors[0].name
    const p5points = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].points

    document.getElementById("p5name").innerHTML = `${p5name}`
    document.getElementById("p5nationality").innerHTML = `${p5nationality}`
    document.getElementById("p5sponsor").innerHTML = `${p5sponsor}`
    document.getElementById("p5points").innerHTML = `${p5points}`

    // P6 results
    const p6name = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.givenName
    const p6nationality = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.nationality
    const p6sponsor = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Constructors[0].name
    const p6points = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].points

    document.getElementById("p6name").innerHTML = `${p6name}`
    document.getElementById("p6nationality").innerHTML = `${p6nationality}`
    document.getElementById("p6sponsor").innerHTML = `${p6sponsor}`
    document.getElementById("p6points").innerHTML = `${p6points}`

    // P7 results
    const p7name = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.givenName
    const p7nationality = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.nationality
    const p7sponsor = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Constructors[0].name
    const p7points = result.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].points

    document.getElementById("p7name").innerHTML = `${p7name}`
    document.getElementById("p7nationality").innerHTML = `${p7nationality}`
    document.getElementById("p7sponsor").innerHTML = `${p7sponsor}`
    document.getElementById("p7points").innerHTML = `${p7points}`





})