import React from "react";

const mouseIn = e => e.target.nextElementSibling.classList.add('open');
const mouseOut = e => e.target.nextElementSibling.classList.remove('open');

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
				<li>
                    <a href="https://gcintranet.tpsgc-pwgsc.gc.ca/gc/rem-eng.html" onMouseOver={mouseIn} onMouseOut={mouseOut}>Compensation</a>
                    <ul className="sm list-unstyled">
                        <li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/remuneration-compensation/comm-eng.html" tabindex="-1" aria-posinset="1" aria-setsize="5" role="menuitem">Compensation community hub</a></li>
		<li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/remuneration-compensation/awr-cwa-eng.html" tabindex="-1" aria-posinset="2" aria-setsize="5" role="menuitem">Compensation web applications</a></li>	
			<li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/sprh-shrs/index-eng.html" tabindex="-1" aria-posinset="3" aria-setsize="5" role="menuitem">Shared Human Resources Services</a></li>	
		<li><a href="https://intranet.canada.ca/ppb-rpa/index-eng.asp" tabindex="-1" aria-posinset="4" aria-setsize="5" role="menuitem">Pay, pension and benefits</a></li>
 		<li class="slflnk"><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/remuneration-compensation/index-eng.html" tabindex="-1" aria-posinset="5" aria-setsize="5" role="menuitem">Compensation - More</a></li>
                    </ul>
                </li>
				<li>
                    <a href="https://gcintranet.tpsgc-pwgsc.gc.ca/gc/app-proc-eng.html" onMouseOver={mouseIn} onMouseOut={mouseOut}>Procurement</a>
                    <ul className="sm list-unstyled">
                         <li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/app-proc/parcourir-browse/index-eng.html" tabindex="-1" aria-posinset="1" aria-setsize="4" role="menuitem">Browse and purchase goods and services</a></li>
 <li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/app-proc/guides/index-eng.html" tabindex="-1" aria-posinset="2" aria-setsize="4" role="menuitem">Procurement advice, guides and tools</a></li>
 <li><a href="https://www.canada.ca/en/treasury-board-secretariat/corporate/job-opportunities/careers-public-procurement.html" tabindex="-1" aria-posinset="3" aria-setsize="4" role="menuitem">Careers in procurement</a></li>
<!-- <li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/eog-ggo/achat-procurement-eng.html">Green procurement</a></li> -->
 <li class="slflnk"><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/gc/app-proc-eng.html" tabindex="-1" aria-posinset="4" aria-setsize="4" role="menuitem">Procurement - More</a></li>
                    </ul>
                </li>
				<li>
                    <a href="https://gcintranet.tpsgc-pwgsc.gc.ca/gc/immeub-build-eng.html" onMouseOver={mouseIn} onMouseOut={mouseOut}>Buildings and offices</a>
                    <ul className="sm list-unstyled">
                        <li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/bi-rp/issues-eng.html" tabindex="-1" aria-posinset="1" aria-setsize="6" role="menuitem">Report building and office issues (National Service Call Centre)</a></li>
 <li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/bi-rp/rep-dir-eng.html" tabindex="-1" aria-posinset="2" aria-setsize="6" role="menuitem">Property managed by the Government of Canada</a></li>
 <li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/bi-rp/publications/index-eng.html" tabindex="-1" aria-posinset="3" aria-setsize="6" role="menuitem">Policies and procedures on federal buildings and offices</a></li>
  <li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/bi-rp/prpi-rpc-eng.html" tabindex="-1" aria-posinset="4" aria-setsize="6" role="menuitem">Find a real property contact</a></li>
  <li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/bi-rp/ser-cat/index-eng.html" tabindex="-1" aria-posinset="5" aria-setsize="6" role="menuitem">Real Property Branch service catalogue</a></li>
 <li class="slflnk"><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/gc/immeub-build-eng.html" tabindex="-1" aria-posinset="6" aria-setsize="6" role="menuitem">Buildings and offices - More</a></li>
                    </ul>
                </li>
				<li>
                    <a href="https://gcintranet.tpsgc-pwgsc.gc.ca/fp-gf/index-eng.html" onMouseOver={mouseIn} onMouseOut={mouseOut}>Government finances</a>
                    <ul className="sm list-unstyled">
                        <li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/rg/txt/paiements-payments-eng.html" tabindex="-1" aria-posinset="1" aria-setsize="7" role="menuitem">Issuing payments</a></li>
<li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/rg/txt/ab-ba-eng.html" tabindex="-1" aria-posinset="2" aria-setsize="7" role="menuitem">Receiving payments</a></li>
<li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/fp-gf/scrg-rgcs/index-eng.html" tabindex="-1" aria-posinset="3" aria-setsize="7" role="menuitem">Receiver General central systems</a></li>
<li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/fp-gf/efaf-yer-eng.html" tabindex="-1" aria-posinset="4" aria-setsize="7" role="menuitem">Year-end requirements</a></li>
<li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/fp-gf/scc-mac-eng.html" tabindex="-1" aria-posinset="5" aria-setsize="7" role="menuitem">Maintaining the accounts of Canada</a></li>
<li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/sigma/index-eng.html" tabindex="-1" aria-posinset="6" aria-setsize="7" role="menuitem">SIGMA: Finance, procurement and real property system</a></li>
<li class="slflnk"><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/fp-gf/index-eng.html" tabindex="-1" aria-posinset="7" aria-setsize="7" role="menuitem">Government finances - More</a></li>
                    </ul>
                </li>
				<li>
                    <a href="https://gcintranet.tpsgc-pwgsc.gc.ca/gc/services-eng.html" onMouseOver={mouseIn} onMouseOut={mouseOut}>More services</a>
                    <ul className="sm list-unstyled">
                        <li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/bt-tb/index-eng.html" tabindex="-1" aria-posinset="1" aria-setsize="7" role="menuitem">Translation Bureau's language services and tools</a></li>
   <li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/rhgc-gchr/index-eng.html" tabindex="-1" aria-posinset="2" aria-setsize="7" role="menuitem">My Government of Canada Human Resources</a></li>
<li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/sem-emm/index-eng.html" tabindex="-1" aria-posinset="3" aria-setsize="7" role="menuitem">Copyright Media Clearance Program</a></li>
 <li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/gc/pub-adv/index-eng.html" tabindex="-1" aria-posinset="4" aria-setsize="7" role="menuitem">Advertising coordination and partnerships</a></li>
 <li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/rop-por/index-eng.html" tabindex="-1" aria-posinset="5" aria-setsize="7" role="menuitem">Public opinion research</a></li>
   <li><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/forms/text/index-eng.html" tabindex="-1" aria-posinset="6" aria-setsize="7" role="menuitem">Forms catalogue</a></li>
 <li class="slflnk"><a href="https://gcintranet.tpsgc-pwgsc.gc.ca/gc/services-eng.html" tabindex="-1" aria-posinset="7" aria-setsize="7" role="menuitem">Services - More</a></li>
                    </ul>
                </li>
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