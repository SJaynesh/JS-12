let n = +prompt(
  "Press 1 for Hollywood\nPress 2 for Bollywood\nPress 3 for Tollywood"
);

switch (n) {
  case 1:
    document.write("<h1>HOLLYWOOD</h2>");
    let choice = +prompt(
      "HOLLYWOOD\nEnter 1 for Jurassic World Rebirth\nEnter 2 for Final Destination Bloodlines\nEnter 3 for A Working Man"
    );

    switch (choice) {
      case 1:
        // document.write(
        //   "<img src='https://resizing.flixster.com/fpo_YIKk9_EAgnlsboOcHEVeekQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzFlODdlYjg1LTlhODEtNDYxYy04YmY1LTc4OGEyYzU1YjQ0Zi5qcGc=' width='500'>"
        // );
        // document.write(
        //   "<h1 style='text-align: center;'>Jurassic World Rebirth</h1>"
        // );

        const view =
          '<div class="card" style="width: 18rem; margin: 10px"><img src="https://resizing.flixster.com/fpo_YIKk9_EAgnlsboOcHEVeekQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzFlODdlYjg1LTlhODEtNDYxYy04YmY1LTc4OGEyYzU1YjQ0Zi5qcGc=" class="card-img-top" alt="..."> <div class="card-body"><h5 class="card-title">Jurassic World Rebirth</h5><p class="card-text">Jurassic World Rebirth is here to dominate, and it is reflected on its dailies worldwide. It is sprinting towards the $50 million mark at the box office in China. The film has also crossed the $150 million mark in North America. This first week is crucial for the film as it will face another tentpole movie this Friday, Superman. Keep scrolling for more.</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>';

        document.write(view);
        break;
      case 2:
        document.write("Your movie is Final Destination Bloodlines");
        break;
      case 3:
        document.write("Your movie is  A Working Man");
        break;
      default:
        alert(`${choice} is invalid choice....`);
    }
    break;
  case 2:
    document.write("<h1>BOLLYWOOD</h2>");
    break;
  case 3:
    document.write("<h1>TOLLYWOOD</h2>");
    break;
  default:
    alert(`${n} is invalid choice....`);
}
