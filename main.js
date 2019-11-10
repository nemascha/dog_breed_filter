
  const quantityButton = document.querySelector('#quantity_filter'),
        stringButton = document.querySelector('#string_filter'),
        check = document.querySelector('#chb');
  const val = document.querySelector('#text_input');
  const resultWords = document.querySelector('#result'),
        list = document.querySelector('.result-list');
  const allWords = [];

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

  function resetResultWords() {
    resultWords.innerHTML = '';
    list.innerHTML = '';
  }

  function addToResultWords(word) {
    let listItem = document.createElement('li');
    list.appendChild(listItem);
    listItem.innerHTML = word;
    resultWords.appendChild(list);
  }

  //
  // Input / Button Handlers
  //

  quantityButton.addEventListener('click', function() {
    resetResultWords();
    const quantity = val.value;
    console.log(quantity);
    for (let word of allWords) {
      if (word.length >= quantity) {
        // let p = document.createElement('p');
        // p.innerHTML = word;
        // resultWords.appendChild(p);
        addToResultWords(word);
      }
    }


  })

  stringButton.addEventListener('click', function() {
    resetResultWords();
    const v = val.value;
    if (check.checked) {
    for (let word of allWords) {
      if (word.includes(v)) {
        // console.log(word);
        // let p = document.createElement('p');
        // p.innerHTML = word;
        // resultWords.appendChild(p);
        addToResultWords(word);
      }
    }
    } else {
    for (let word of allWords) {
      if (word.toLowerCase().includes(v.toLowerCase())) {
        // console.log(word);
        // let p = document.createElement('p');
        // p.innerHTML = word;
        // resultWords.appendChild(p);
        addToResultWords(word);
      }
    }
   }

  })

