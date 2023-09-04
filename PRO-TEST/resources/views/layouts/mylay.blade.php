<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <meta name="description" content="Web site created using create-react-app" />
    <link rel="apple-touch-icon" href="/src/img/lg.png" />
    <title>Hamza Ouarir</title>
</head>
<body>
    <div id="app"></div>
    <div id="ppp" data-auth="{{Auth::check()}}"></div>

    <style>
       :root {
    --white: #001233;
    --purp: #FF595A;
    --three:#CAC0B3;
}
/*
#FF595A#001233#CAC0B3
    #0C1A1A#6ACFC7
    #178582#0A1828#BFA181

       :root {
    --white: beige;
    --purp: #6acfc7;
    --three:#001233;
}*/

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

header {
    z-index: 1111;
    background: var(--white);
}

footer {
    background-color: var(--white);
    color: var(--three);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(93, 93, 93, 0.19) 0px -3px 3px;
}
#app{
    display: grid;
    grid-auto-rows: 60px 1fr 60px
}
    </style>
</body>
@viteReactRefresh
 @vite(['resources/js/app.jsx'])
</html>
