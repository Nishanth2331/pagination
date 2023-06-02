  var currentPage = 1;
    var entriesPerPage = 2;
    var table;
    var rows;
    var totalPages;

    function initializeTable() {
      table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
      rows = table.rows;
      totalPages = Math.ceil(rows.length / entriesPerPage);
    }

    function showPage(page) {
      var startIndex = (page - 1) * entriesPerPage;
      var endIndex = startIndex + entriesPerPage;

      for (var i = 0; i < rows.length; i++) {
        rows[i].style.display = "none";
      }

      for (var j = startIndex; j < endIndex; j++) {
        if (rows[j]) {
          rows[j].style.display = "";
        }
      }

      document.getElementById("currentPage").textContent = page;
    }

    function generatePagination() {
      var pagination = document.getElementById("pagination");
      pagination.innerHTML = "";

      var previousButton = document.createElement("button");
      previousButton.textContent = "Previous";
      previousButton.onclick = function () {
        if (currentPage > 1) {
          currentPage--;
          showPage(currentPage);
        }
      };
      pagination.appendChild(previousButton);

      for (var i = 1; i <= totalPages; i++) {
        var button = document.createElement("button");
        button.textContent = i;
        button.onclick = function () {
          currentPage = parseInt(this.textContent);
          showPage(currentPage);
        };

        pagination.appendChild(button);
      }

      var nextButton = document.createElement("button");
      nextButton.textContent = "Next";
      nextButton.onclick = function () {
        if (currentPage < totalPages) {
          currentPage++;
          showPage(currentPage);
        }
      };
      pagination.appendChild(nextButton);
    }

    window.onload = function () {
      initializeTable();
      showPage(currentPage);
      generatePagination();
    };
 