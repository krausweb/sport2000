/**
 * Created by alkri on 5/23/16.
 */
/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magento.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magento.com for more information.
 *
 * @category    design
 * @package     sport2000_default
 * @copyright   Copyright (c) 2006-2016 X.commerce, Inc. and affiliates (http://www.magento.com)
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */


$j(document).ready(function(){

    //////////////// for account /////////////
    var skipContents = $j('.skip-content');
    var skipLinks = $j('.skip-link');

    skipLinks.on('mouseenter mouseleave', function (e) {
        e.preventDefault();

        var self = $j(this);
        // Use the data-target-element attribute, if it exists. Fall back to href.
        var target = self.attr('data-target-element') ? self.attr('data-target-element') : self.attr('href');

        // Get target element
        var elem = $j(target);

        // Check if stub is open
        var isSkipContentOpen = elem.hasClass('skip-active') ? 1 : 0;

        // Hide all stubs
        skipLinks.removeClass('skip-active a-account-cart-hover');
        skipContents.removeClass('skip-active');

        // Toggle stubs
        if (isSkipContentOpen) {
            self.removeClass('skip-active a-account-cart-hover');
        } else {
            self.addClass('skip-active a-account-cart-hover');
            elem.addClass('skip-active');
        }
    });

    ////////////////// for Account Detail /////////////////////////
    var accountDetail = $j('.account-detail');
    var account = $j('.account');
    accountDetail.on('mouseenter mouseleave', function () {
        // Toggle stubs
        if ( accountDetail.hasClass('account-detail-active') ) {
            accountDetail.removeClass('skip-active account-detail-active');
            account.removeClass('a-account-cart-hover');
        } else {
            accountDetail.addClass('skip-active account-detail-active');
            account.addClass('a-account-cart-hover');
        }
    });

    /////////////////// for Cart Detail ////////////////
    var cartDetail = $j('.cart-detail');
    var cart = $j('.cart');
    cartDetail.on('mouseenter mouseleave', function () {
        // Toggle stubs
        if ( cartDetail.hasClass('cart-detail-active') ) {
            cartDetail.removeClass('skip-active cart-detail-active');
            cart.find('a.skip-link').removeClass('a-account-cart-hover');     // for cart - on 'a'
        } else {
            cartDetail.addClass('skip-active cart-detail-active');
            cart.find('a.skip-link').addClass('a-account-cart-hover');        // for cart - on 'a'
        }
    });


    /////////////////// for search /////////////////
    var searchInput = $j('#search');
    // if isset search data
    if($j(searchInput).val()){
        $j(searchInput).removeClass('search-input');
        $j(searchInput).addClass('search-input-hasdata');
    }
    $j(searchInput).on('blur', function(){
        if($j(this).val()) $j(this).addClass('search-input-hasdata');
    });
    $j(searchInput).on('focus', function(){
        $j(this).removeClass('search-input-hasdata');
    });
    $j('#btn-search').on('click', function (e) {
        if(!$j(searchInput).val()) {
            e.preventDefault();
            $j(searchInput).toggleClass('search-input', 500);
        }
    });
    $j(document).mouseup(function (e) {
        var search_form = $j("#search_mini_form");
        if (search_form.has(e.target).length === 0){
            if(!$j(searchInput).val()) $j(searchInput).addClass('search-input');
        }
    });


    //////////////////// for mini menu, after 868 px ///////////////////
    /////////////////// for Cart Detail ////////////////
    var menuMini = $j('.page-header-menu-mini');
    var menuTop = $j('.page-header-container-top-menu');

    menuMini.on('mouseenter mouseleave', function () {
        // Toggle stubs
        if ( menuMini.hasClass('active') ) {
            if( !menuTop.hasClass('top-menu-mini-active') ) {
                menuMini.removeClass('active');
            }

            // menuTop.removeClass('top-menu-mini-active');
            // remove "align" right when not active mini menu
            // menuTop.removeAttr('style');
        } else {
            menuMini.addClass('active');
            menuTop.addClass('top-menu-mini-active');

            if( $j(window).width() < 755 ){
                // 15 //@media only screen and(max-width: 770px) {
                menuTop.css('left', $j(window).width() - 130 - 15);
            }else{
                menuTop.css('left', $j(window).width() - 130 - 30);
            }
        }
    });

    menuTop.on('mouseleave', function () {
        menuMini.removeClass('active');
        menuTop.removeClass('top-menu-mini-active');
        // remove "align" right when not active mini menu
        menuTop.removeAttr('style');
    });

    // @todo AK - checking hidden menu-mini on top,left,right
    /*$j( menuMini ).on( "mousemove", function(e) {
         if(e.pageY < 41) {
             console.log(e.pageY);
             menuMini.removeClass('active');
         }
         console.log( "pageX: " + e.pageX + ", pageY: " + e.pageY );
     });*/
});