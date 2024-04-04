
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CKEditor</title>
  <script src="https://cdn.ckeditor.com/ckeditor5/36.0.1/classic/ckeditor.js"></script>
</head>
<body>
  <h1>CKEditor</h1>
  
  <!-- Выпадающий список с вариантами -->
  <select id="blockSelect">
    <!-- Опции будут добавлены динамически -->
  </select>
  
  <!-- Редактор CKEditor -->
  <textarea id="editor"></textarea>
  
  <!-- Кнопка для сохранения данных -->
  <button id="saveBtn">Save</button>

  <script>
    // Инициализация CKEditor
    const editor = ClassicEditor
      .create(document.querySelector('#editor'))
      .then(editor => {
        console.log('Editor initialized:', editor);
      })
      .catch(error => {
        console.error('Error initializing editor:', error);
      });
    
    // Получение списка блоков данных из файла JSON
    fetch('/getData')
      .then(response => response.json())
      .then(data => {
        const blockSelect = document.getElementById('blockSelect');
        
        // Добавляем опции в выпадающий список для каждого блока данных
        for (const blockId in data) {
          if (data.hasOwnProperty(blockId)) {
            const option = document.createElement('option');
            option.value = blockId;
            option.textContent = blockId;
            blockSelect.appendChild(option);
          }
        }
        
        // Обработчик события для выбора варианта
        blockSelect.addEventListener('change', function() {
          const selectedOption = this.value;
          const selectedContent = data[selectedOption].content;
          
          // Устанавливаем содержимое выбранного блока в редактор CKEditor
          editor.then(editorInstance => {
            editorInstance.setData(selectedContent);
          });
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    
    // Обработчик события для сохранения данных
    document.getElementById('saveBtn').addEventListener('click', function() {
      // Получаем текущее содержимое из CKEditor
      editor.then(editorInstance => {
        const blockId = document.getElementById('blockSelect').value;
        const content = editorInstance.getData();
        
        // Отправляем данные на сервер для сохранения
        fetch('/saveData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ blockId, content })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          console.log('Data saved successfully');
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
      });
    });
  </script>
</body>
</html>














# Installation Instructions
This repository contains two folders: backend and frontend, corresponding to the server-side and client-side of the application. Follow the instructions below to install and run the server and the web application.

# Server Installation
1. Open a terminal and navigate to the backend folder using the cd backend command.
2. Make sure you have Node.js and npm installed.
3. Run the command npm install to install all the server-side dependencies.
4. After the successful installation, execute the command npm run dev to start the server.
5. The server will be running at localhost:5000.
# Web Application Installation
1. Open a new terminal and navigate to the frontend folder using the cd frontend command.
2. Make sure you have Node.js and npm installed.
3. Run the command npm install to install all the client-side dependencies.
4. After the successful installation, execute the command npm start to launch the web application.
5. The web application will be accessible at localhost:3000.
You can now use the application by opening a web browser and visiting localhost:3000.
# Preview
# Main page
![alt text](https://github.com/hylaron/naturesmell/blob/main/other/candle1.jpg)
![alt text](https://github.com/hylaron/naturesmell/blob/main/other/candle2.jpg)
# hover animation of the catalog page
![alt text](https://github.com/hylaron/naturesmell/blob/main/other/candle2.gif)
# Product page
![alt text](https://github.com/hylaron/naturesmell/blob/main/other/candle3.jpg)
