const mainData = [
  {
    name: "Arjun",
    id: 1,
  },
  {
    name: "manisha",
    id: 2,
  },
  {
    name: "ishu",
    id: 3,
  },
  {
    name: "surya",
    id: 4,
  },
  {
    name: "mani",
    id: 5,
  },
  {
    name: "zara",
    id: 6,
  },
  {
    name: "babu",
    id: 7,
  },
  {
    name: "ruthra",
    id: 8,
  },
  {
    name: "jothi",
    id: 9,
  },
  {
    name: "revathi",
    id: 10,
  },
  {
    name: "sugha",
    id: 11,
  },
  {
    name: "krishna",
    id: 12,
  },
  {
    name: "kavi",
    id: 13,
  },
  {
    name: "muthu",
    id: 14,
  },
  {
    name: "ram",
    id: 15,
  },
  {
    name: "charan",
    id: 16,
  },
  {
    name: "latha",
    id: 17,
  },
  {
    name: "raja",
    id: 18,
  },
  {
    name: "sathish",
    id: 19,
  },
  {
    name: "muthu",
    id: 20,
  },

  {
    name: "sumathi",
    id: 21,
  },
  {
    name: "gayathri",
    id: 22,
  },
  {
    name: "ragul",
    id: 23,
  },
  {
    name: "ravi",
    id: 24,
  },
  {
    name: "gokul",
    id: 25,
  },
];
var data = mainData;

console.log(data, "data");
var emptyrow = [];
var currentpages, rows, table, button, pageno, dropdown, search, input;
currentpages = 1;
rows = 5;
console.log(currentpages, "page", rows, "rows");

table = document.getElementById("table"); //tablevalues
button = document.getElementById("pagenumber"); //buttons

let pagecount = Math.ceil(data.length / rows);
pageno = document.getElementById("pageno");

dropdown = document.getElementById("dropdown");
dropdown.addEventListener("change", function (e) {
  console.log(e.target.value);
  rows = e.target.value;
  tablesetup();
});

// eslint-disable-next-line no-unused-vars
function myFunction(e) {
  search = document.getElementById("searchData");
  console.log(search, "search");
  input = " ";
  data = mainData;
  input = e.target.value;
  console.log(input, "input");
  setTimeout(() => {
    if (input !== "") {
      data = data.filter((el) => {
        return el.name.toLowerCase().includes(input.toLowerCase());
      });
      currentpages = 1;
      tablesetup();
    } else if (input === "") {
      data = mainData;
      button.innerHTML = "";

      tablesetup();
    }
  }, 2000);
}

function tablesetup() {
  table.innerHTML = "";
  button.innerHTML = "";
  emptyrow = [];
  // eslint-disable-next-line array-callback-return
  data?.map(
    (
      row,
      i //5,0
      // eslint-disable-next-line array-callback-return
    ) => {
      if (i < rows * currentpages) {
        //row = i;
        console.log(row, "row");
        emptyrow.push(row);
      }
    }
  );
  if (currentpages !== 1) {
    emptyrow.splice(0, rows * (currentpages - 1));
  }
  settable();
  setbutton();
}
function settable() {
  // eslint-disable-next-line array-callback-return
  emptyrow.map((row) => {
    var item = `<tr>
        <td>${row.name}</td>
        <td>${row.id}</td>
        </tr>`;
    //table.append(item);
    table.innerHTML += item;
    pageno.innerHTML = currentpages + "of" + pagecount;
  });
}
const setbutton = () => {
  button.innerHTML = "";

  let pagecount = Math.ceil(data.length / rows);
  console.log(pagecount, "pagecount");

  if (currentpages > 1) {
    button.innerHTML += `<button onclick="prevpage()">prev</button>`;
  }
  for (let i = 1; i <= pagecount; i++) {
    button.innerHTML += `<button  onclick="changePage(${i})">${i}</button>`;
  }

  if (currentpages !== 1) {
    button.innerHTML += `<button onclick="nextpage()"> next </button>`;
  }
};
// eslint-disable-next-line no-unused-vars
const prevpage = () => {
  button.innerHTML = "";
  currentpages--;
  tablesetup();
};

// eslint-disable-next-line no-unused-vars
const nextpage = () => {
  button.innerHTML = "";
  currentpages++;
  tablesetup();
};
// eslint-disable-next-line no-unused-vars
const changePage = (pages) => {
  table.innerHTML = "";
  currentpages = pages;
  tablesetup();
};

window.onload = () => {
  tablesetup();
};
