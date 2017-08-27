import test from 'ava';
import ayak from './index';

test('test', async t => {
  
  ayak('string').on({
    upper: (name, tick) => {
      tick(name.toUpperCase())
    },
    lower: (name, tick) => {
      tick(name.toLowerCase())
    }
  })

  t.is("AHMET" ,await ayak('string').emit('upper', "ahmet"))
  t.is("ahmet" ,await ayak('string').emit('lower', "AHMET"))

})
