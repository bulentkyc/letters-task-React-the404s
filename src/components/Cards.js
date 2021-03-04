let colors = [];

export default function (props) {

  let diff = props.data.split('').length - colors.length;

  if (diff > 0) {
    //additional letters
    for (let counter = 0; counter < diff; counter++) {
        colors.push('#' + Math.floor(Math.random()*16777215).toString(16));
    }
  } else if (diff < 0) {
    //absent letter (deleted)
    for (let counter = 0; counter < Math.abs(diff); counter++) {
      colors.pop();
    }
  }
  
  
  console.log(colors);

    let letters = props.data.split('');

    let cards = letters.map((letter, i) => {
        return (<p className="card" style={{backgroundColor:colors[i]}}>{letter}</p>);
    });

    return (
        <div className="card-wrapper">{cards}</div>
    );
}