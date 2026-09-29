# Como alterar os status

Abra `js/trilha.js`.

Cada assunto é um par: nome e status.

```javascript
["HTML semântico", false]
```

- `false` = Pendente
- `true` = Feito

Exemplo de algo já estudado:

```javascript
["HTML semântico", true]
```

Salve o arquivo e recarregue o `index.html`.

A porcentagem do card é a quantidade de assuntos com `true` dividida pelo total daquele módulo. O card da fase usa a mesma conta com todos os módulos dela.

Para incluir um assunto novo, copie uma linha dentro do grupo e troque o nome.

```javascript
g("Dominar", [
  ["HTML semântico", false],
  ["Novo assunto", false]
])
```
