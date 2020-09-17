<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Docker | Praticando | IT HAPPENS</title>
    <link rel="stylesheet" href="vendor/css/bootstrap.min.css"
</head>
<body>

<!--Função PHP que vai bater na rota da API Node e pegar o resultados-->
 <?php
    $result = file_get_contents ("http://node-container:9001/products");
    $products = json_decode ($result);
 ?>

 <div class="container">
 <table class= "table">
    <thead>
        <tr>
            <th>Produto</th>
            <th>Preço</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($products as $product): ?>
            <tr>
                <td><?php echo $product->name; ?></td>
                <td><?php echo $product->price; ?></td>
            </tr>
        <?php endforeach; ?>
    </tbody>
 </table>    
 </div>
 
</body>
</html>