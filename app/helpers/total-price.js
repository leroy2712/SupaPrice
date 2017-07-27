import Ember from 'ember';

export function totalPrice(cartItems) {
  var items = cartItems[0];
  var totalPriceNaivas = 0;
  var totalPriceNakumatt = 0;
  var totalPriceTuskys = 0;
  var totalPriceUchumi = 0;
  var totalPrice = "";

  items.forEach(function(item) {
    var priceNaivas = parseInt(item.get('Naivas'));
    var priceNakumatt = parseInt(item.get('Nakumatt'));
    var priceTuskys = parseInt(item.get('Tuskys'));
    var priceUchumi = parseInt(item.get('Uchumi'));

    totalPriceNaivas = priceNaivas + totalPriceNaivas;
    totalPriceNakumatt = priceNakumatt + totalPriceNakumatt;
    totalPriceTuskys = priceTuskys + totalPriceTuskys;
    totalPriceUchumi = priceUchumi + totalPriceUchumi;
    return totalPriceNaivas && totalPriceNakumatt && totalPriceTuskys && totalPriceUchumi;
  });
  totalPrice = ("Naivas Total: " + totalPriceNaivas + " Nakumatt Total: " + totalPriceNakumatt + " Tuskys Total: " + totalPriceTuskys + " Uchumi Total: " + totalPriceUchumi);
  return totalPrice;
}

export default Ember.Helper.helper(totalPrice);
