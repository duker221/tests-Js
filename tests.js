import _ from 'lodash';

if ( _.get( {hello: 'world'}, 'hello' ) !== 'world') {
    throw new Error('Функция работет неверно!');
}

if (_.get({hello: 'world'}, 'hello', 'kitty') !== 'world') {
    throw new Error ('Функция работает неверно!');
}

if (_.get({}, 'hello', 'kitty') !== 'kitty') {
    throw new Error ('Функция работает неверно!')
}

console.log('Все работает корректно!')