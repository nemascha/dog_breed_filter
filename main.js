
  const quantityButton = document.querySelector('#quantity_filter'),
        stringButton = document.querySelector('#string_filter'),
        check = document.querySelector('#chb');
  const val = document.querySelector('#text_input');
  let resultWords = document.querySelector('#result');


  const proxyURL = "https://cors-anywhere.herokuapp.com/";
  const url = 'https://www.mrsoft.by/data.json';


  // //
  // // Method 1
  // //
  // (async () => {
  //   const response = await fetch(proxyURL + url, {
  //     method: 'GET',
  //     // headers: {
  //     //   'Accept': 'application/json',
  //     //   'Content-Type': 'application/json'
  //     // },
  //   });
  //   const responseJson = await response.json();
  //
  //   const words = responseJson.data;
  //   console.log(words[1])
  // })();

  //
  // Method 2
  //

  let getData = fetch(proxyURL + url);
  getData
      .then(resp => {
        resp.json().then(data => {
          const words = data.data;
          for (let i = 0; i <= words.length; i++) {
            allWords.push(words[i]);
          }
        })
      })
      .catch(err => console.warn(err))

  const allWords = [];

  //
  // Input / Button Handlers
  //

  quantityButton.addEventListener('click', function() {
    let quantity = val.value;
    let quantityWords = [];

    for (let i = 0; i <= allWords.length; i++) {
      // console.log(allWords[i].length);
      if (allWords[i].trim().length >= quantity) {
        quantityWords.push(allWords[i]);
        let p = document.createElement('p');
        p.innerHTML = allWords[i];
        resultWords.appendChild(p);
      } else {break;}
      console.log(quantityWords[i]);
    }
  })

  stringButton.addEventListener('click', function() {
    const v = val.value;
    if (check.checked) {
    for (let i = 0; i <= allWords.length; i++) {
      if (allWords[i].includes(v)) {
        console.log(allWords[i]);
        let p = document.createElement('p');
        p.innerHTML = allWords[i];
        resultWords.appendChild(p);
      }
    }
    } else {
    for (let i = 0; i <= allWords.length; i++) {
      if (allWords[i].toLowerCase().includes(v.toLowerCase())) {
        console.log(allWords[i]);
        let p = document.createElement('p');
        p.innerHTML = allWords[i];
        resultWords.appendChild(p);
      }
    }
    alert('no checked');

   }

  })

