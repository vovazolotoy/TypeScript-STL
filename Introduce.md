Решение задач на структури данних с помощью Javascript

Хочу представить на суд сообщества собственную разработку – библиотеку libstl,
которая включает в себя колекцию наиболее распрастранених структур данних: 
Двунаправлений Список, Стек, Очередь, Куча, Очеред с приоритетом.

Основной задачей при разработке било создание библиотеке для Javascript/Typescript
со сталими API,
которое покрито тестами
 В сети есть несколько библиотек которие реализирують некоторие структури,
 но они часто больше не поддержуются/развиваются. 
 
 Даная библиотка оформлена в виде модуля для node.js. Библиотека в оригинале
 написана на TypeScript.

Приваду пример испольщования библиотеке на решение задачи на структуду данних
Связаний список
http://www.geeksforgeeks.org/pairwise-swap-elements-of-a-given-linked-list/

Написать функцию которая б попарно заменяла елементи в списке, Например 
для списка 1->2->3->4->5 функция должна видать результат  2->1->4->3->5
а для 1->2->3->4->5->6 результатом будет 2->1->4->3->6->5

