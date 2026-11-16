$(function () {

	var $toggle = $('#catalogToggle');
	var $drop   = $('#catalogDrop');

	function openCatalog() {
		$drop.addClass('is-open');
		$toggle.addClass('is-active');
	}

	function closeCatalog() {
		$drop.removeClass('is-open');
		$toggle.removeClass('is-active');
	}

	$toggle.on('click', function (e) {
		e.preventDefault();
		if ($drop.hasClass('is-open')) {
			closeCatalog();
		} else {
			openCatalog();
		}
	});

	// закрытие по клику вне каталога
	$(document).on('click', function (e) {
		if (
			$drop.hasClass('is-open') &&
			!$(e.target).closest('#catalogDrop, #catalogToggle').length
		) {
			closeCatalog();
		}
	});

	// закрытие по Esc
	$(document).on('keyup', function (e) {
		if (e.key === 'Escape') closeCatalog();
	});

	// Саш, расскоментируешь, если каталог должен быть открыт по умолчанию, для удобства функцию сделал:
	// openCatalog();

});
