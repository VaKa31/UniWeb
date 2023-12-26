<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Tired Student</title>

    <link rel="stylesheet" href="css/main.css">

    <script src="libs/gsap/gsap.min.js" defer></script>
    <script src="libs/gsap/ScrollSmoother.min.js" defer></script>
    <script src="libs/gsap/ScrollTrigger.min.js" defer></script>

    <script src="js/app.js" defer></script>

</head>
<body>
    
    <div class="wrapper">
        <div class="content">
            <?php
            $header=file_get_contents('header.html');
            echo $header;
            ?>
            <article class="main-article" style="background-image: url(img/dungeon.jpg);">
                <?php
                $article=file_get_contents('article.html');
                echo $article;
                ?>
                
            </article>
            
        </div>
    </div>

</body>
</html
