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
    headerCustomSport2000.init();
});




var headerCustomSport2000 = {
    init: function(){
        this.accountHoverVisibleHide();
        this.accountDetailHoverVisibleHide();
        this.cartDetailHoverVisibleHide();
        this.searchInputVisibleHide();
        this.menuMiniHoverVisibleHideResize();
    },

    accountHoverVisibleHide: function(){
        var accountSkipContents = $j('.skip-content')
            , accountSkipLinks = $j('.skip-link')
            , accountSkipActiveCss = 'skip-active'
            , accountSkipActiveCartHoverCss = 'skip-active a-account-cart-hover';

        // canceled touch for tablet/mobile
        accountSkipLinks.on('click', function(e){e.preventDefault()});

        // hover visible/hide account
        accountSkipLinks.on('mouseenter mouseleave', function (e) {
            e.preventDefault();

            var self = $j(this);
            // Use the data-target-element attribute, if it exists. Fall back to href.
            var target = self.attr('data-target-element') ? self.attr('data-target-element') : self.attr('href');
            // Get target element
            var elem = $j(target);
            // Check if stub is open
            var isSkipContentOpen = elem.hasClass(accountSkipActiveCss) ? 1 : 0;

            // Hide all stubs
            accountSkipLinks.removeClass(accountSkipActiveCartHoverCss);
            accountSkipContents.removeClass(accountSkipActiveCss);

            // Toggle stubs
            if (isSkipContentOpen) {
                self.removeClass(accountSkipActiveCartHoverCss);
            } else {
                self.addClass(accountSkipActiveCartHoverCss);
                elem.addClass(accountSkipActiveCss);
            }
        });
    },
    accountDetailHoverVisibleHide: function(){
        var account = $j('.account')
            , accountDetail = $j('.account-detail')
            , accountDetailActiveCss = 'account-detail-active'
            , accountDetailSkipActiveDetailCss = 'skip-active account-detail-active'
            , accountDetailHoverCss = 'a-account-cart-hover';

        accountDetail.on('mouseenter mouseleave', function () {
            // Toggle stubs
            if ( accountDetail.hasClass(accountDetailActiveCss) ) {
                accountDetail.removeClass(accountDetailSkipActiveDetailCss);
                account.removeClass(accountDetailHoverCss);
            } else {
                accountDetail.addClass(accountDetailSkipActiveDetailCss);
                account.addClass(accountDetailHoverCss);
            }
        });
    },
    cartDetailHoverVisibleHide: function(){
        var cart = $j('.cart')
            , cartDetail = $j('.cart-detail')
            , cartDetailActiveCss = 'cart-detail-active'
            , cartDetailSkipActiveDetailCss = 'skip-active cart-detail-active'
            , cartDetailAskipLinkCss = 'a.skip-link'
            , cartDetailAhoverCss = 'a-account-cart-hover';

        cartDetail.on('mouseenter mouseleave', function () {
            // Toggle stubs
            if ( cartDetail.hasClass(cartDetailActiveCss) ) {
                cartDetail.removeClass(cartDetailSkipActiveDetailCss);
                cart.find(cartDetailAskipLinkCss).removeClass(cartDetailAhoverCss);
            } else {
                cartDetail.addClass(cartDetailSkipActiveDetailCss);
                cart.find(cartDetailAskipLinkCss).addClass(cartDetailAhoverCss);
            }
        });
    },
    searchInputVisibleHide: function(){
        var searchInput = $j('#search')
            , searchInputBtn =  $j('#btn-search')
            , searchInputForm =  $j("#search_mini_form")
            , searchInputCss = 'search-input';

        // visible input search
        if(searchInput.val()) searchInput.removeClass(searchInputCss);
        searchInputBtn.on('click', function (e) {
            if(!searchInput.val()) {
                e.preventDefault();
                searchInput.toggleClass(searchInputCss, 500);
            }
        });
        $j(document).mouseup(function (e) {
            if (searchInputForm.has(e.target).length === 0){
                if(!searchInput.val()) searchInput.addClass(searchInputCss);
            }
        });
    },
    menuMiniHoverVisibleHideResize: function(){
        // menu mini visible after bp.medium

        var menuMini = $j('.page-header-menu-mini')
            , menuTop = $j('.page-header-container-top-menu')
            , menuHeaderLogo = $j('#header-logo')
            , menuMiniActiveCss = 'active'
            , menuMiniDetailActiveCss = 'top-menu-mini-active';

        enquire.register('(max-width: ' + bp.medium + 'px)', {
            match: function () {
                menuMini.append(menuTop);
            },
            unmatch: function () {
                menuHeaderLogo.after(menuTop);
            }
        });
        menuMini.on('mouseenter mouseleave', function () {
            // Toggle stubs
            if (menuMini.hasClass(menuMiniActiveCss)) {
                menuMini.removeClass(menuMiniActiveCss);
                menuTop.removeClass(menuMiniDetailActiveCss);
            } else {
                menuMini.addClass(menuMiniActiveCss);
                menuTop.addClass(menuMiniDetailActiveCss);
            }
        });
    }
};