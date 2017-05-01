jQuery(document).on('mousedown', '.PkgBtmContBtn,.PkgTopContBtn', function() {
	var reservation_packages = [];
	var reservations_packages_no_index = [];
	var reservations_packages_total = 0;
	jQuery('.checked').each(function(index, el) {
		reservation_packages.push(jQuery(el).parents('.PkgItemContent').find('.PkgItemHeader').text() + ':' + index)
		reservations_packages_no_index.push(jQuery(el).parents('.PkgItemContent').find('.PkgItemHeader').text());
		reservations_packages_total += parseInt(jQuery(el).parents('.PkgPriceBtn').find('.PkgTotalPrice').children().eq(0).text())
	});
	if ((reservation_packages.length >= 1) && jQuery('.PkgDpDwn select').val() != '0') {
		utag.link({
			'reservation_packages': reservation_packages.join(','),
			'event_description': 'package_select',
			'reservation_packages_merchandising': reservations_packages_no_index.join(','),
			'packages_total': reservations_packages_total,
			'taxes': utag.data.taxes,
			'order_fees': Math.round((utag.data.total_with_tax - utag.data.total_minus_tax - utag.data.taxes) * 100) / 100,
			'hotelID': utag.data.hotelID,
			'total_minus_tax': utag.data.total_minus_tax,
			'booking_duration': utag.data.booking_duration
		});
		//localStorage.reservation_packages_merchandising = reservations_packages_no_index.join(',');
		//localStorage.packages_total = reservations_packages_total;
	}
	else if (jQuery('.PkgDpDwn select').val() == '0') {
		utag.link({
			'event_description': 'package_select_zero'
		})
	}

});
