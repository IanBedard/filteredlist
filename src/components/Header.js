import React from "react";

export default () => {
    return (
    <>
        <ul id="wb-tphp">
            <li class="wb-slc"> <a class="wb-sl" href="#wb-cont">Skip to main content</a> </li>
            <li class="wb-slc visible-sm visible-md visible-lg"> <a class="wb-sl" href="#wb-info">Skip to "About this
                    site"</a> </li>
        </ul>
        <header role="banner">
            <div id="wb-bnr" class="container">
                <section id="wb-lng" class="visible-md visible-lg text-right">
                    <h2 class="wb-inv">Language selection</h2>
                    <div class="row">
                        <div class="col-md-12">
                            <ul class="list-inline margin-bottom-none">
                                <li><a lang="fr" href="/cgi-bin/language.pl">Fran&ccedil;ais</a></li>
    
                            </ul>
                        </div>
                    </div>
                </section>
                <div class="row">
                    <div class="brand col-xs-8 col-sm-9 col-md-6"> <a
                            href="https://gcintranet.spac-pspc.gc.ca/gc/index-eng.html"><img
                                src="/site/wet4.0/theme-tp-pw-publi-gcweb/img/sig-blk-en.svg"
                                alt="Public Services and Procurement Canada" /><span class="wb-inv"> / <span lang="fr">
                                    Services publics et Approvisionnement Canada</span></span></a> </div>
                    <section class="wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs" id="wb-glb-mn">
                        <h2>Search and menus</h2>
                        <ul class="list-inline text-right chvrn">
                            <li><a href="#mb-pnl" title="Search and menus" aria-controls="mb-pnl" class="overlay-lnk"
                                    role="button"><span class="glyphicon glyphicon-search"><span
                                            class="glyphicon glyphicon-th-list"><span class="wb-inv">Search and
                                                menus</span></span></span></a></li>
                        </ul>
                        <div id="mb-pnl"></div>
                    </section>
                    
                </div>
            </div>
            <nav role="navigation" id="wb-sm" data-ajax-replace="/site/wet4.0/html5/includes/sitemenu-eng.html" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement">
	<div class="container nvbar">
		<h2>Topics menu</h2>
		<div class="row">
			<ul class="list-inline menu">
				<li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/gc/rem-eng.html">Compensation</a></li>
				<li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/gc/app-proc-eng.html">Procurement</a></li>
				<li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/gc/immeub-build-eng.html">Buildings and offices</a></li>
				<li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/fp-gf/index-eng.html">Government finances</a></li>
				<li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/gc/services-eng.html">More services</a></li>
			</ul>
		</div>
	</div>
</nav>
    
            <nav role="navigation" id="wb-bc" class="" property="breadcrumb">
                <h2 class="wb-inv">You are here:</h2>
                <div class="container">
                    <div class="row">
                        <ol class="breadcrumb">
                            <li> <a href="https://gcintranet.tpsgc-pwgsc.gc.ca/gc/index-eng.html">PSPC GCintranet </a> </li>
                            <li><a href="/remuneration-compensation/index-eng.html">Compensation</a></li>
                            <li><a href="/remuneration-compensation/comm-eng.html">Compensation community hub</a></li>
                            <li><a href="/gc/rem/conseil-advisor-eng.html">Pay system instructions and documentation </a>
                            </li>
                            <li><a href="/remuneration-compensation/utiliser-use-eng.html">How to use the pay system</a>
                            </li>
                            <li><a href="/remuneration-compensation/procedures/recherche-search-eng.html">Phoenix
                                    procedures, job aids and instructions</a></li>
                        </ol>
                    </div>
                </div>
            </nav>
        </header>
    </>);
}