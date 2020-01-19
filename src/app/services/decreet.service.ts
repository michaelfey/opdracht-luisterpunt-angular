import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DecreetService {

  private lastFiveDecretenQuery: string = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX eli: <http://data.europa.eu/eli/ontology#>\n" +
    "\n" +
    "SELECT ?opschrift ?publicatieDatum WHERE {\n" +
    "?decreten <http://data.europa.eu/eli/ontology#type_document> <https://data.vlaanderen.be/id/concept/AardWetgeving/Decreet>.\n" +
    "\n" +
    "?decreten <http://data.europa.eu/eli/ontology#is_realized_by> ?verschijningsvorm.\n" +
    "?verschijningsvorm <http://data.europa.eu/eli/ontology#title> ?opschrift.\n" +
    "?verschijningsvorm  <http://data.europa.eu/eli/ontology#date_publication> ?publicatieDatum.\n" +
    "?verschijningsvorm <http://data.europa.eu/eli/ontology#first_date_entry_in_force> ?entrydate.\n" +
    "\n" +
    "\n" +
    "\n" +
    "}ORDER BY DESC(?publicatieDatum)  LIMIT 5";

  private queryDecretenUri = '?default-graph-uri=https%3A%2F%2Fdata.vlaanderen.be%2Fns%2Fwetgeving&query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E+PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E+PREFIX+eli%3A+%3Chttp%3A%2F%2Fdata.europa.eu%2Feli%2Fontology%23%3E%0D%0A%0D%0ASELECT+%3Fopschrift+%3FpublicatieDatum+WHERE+%7B%0D%0A%3Fdecreten+%3Chttp%3A%2F%2Fdata.europa.eu%2Feli%2Fontology%23type_document%3E+%3Chttps%3A%2F%2Fdata.vlaanderen.be%2Fid%2Fconcept%2FAardWetgeving%2FDecreet%3E.%0D%0A%0D%0A%3Fdecreten+%3Chttp%3A%2F%2Fdata.europa.eu%2Feli%2Fontology%23is_realized_by%3E+%3Fverschijningsvorm.%0D%0A%3Fverschijningsvorm+%3Chttp%3A%2F%2Fdata.europa.eu%2Feli%2Fontology%23title%3E+%3Fopschrift.%0D%0A%3Fverschijningsvorm++%3Chttp%3A%2F%2Fdata.europa.eu%2Feli%2Fontology%23date_publication%3E+%3FpublicatieDatum.%0D%0A%3Fverschijningsvorm+%3Chttp%3A%2F%2Fdata.europa.eu%2Feli%2Fontology%23first_date_entry_in_force%3E+%3Fentrydate.%0D%0A%0D%0A%0D%0A%0D%0A%7DORDER+BY+DESC%28%3FpublicatieDatum%29++LIMIT+5';
  constructor(private http: HttpClient) {
  }

  public getLastFiveDecreten(): any {
    const baseUrl = 'https://codex.opendata.api.vlaanderen.be:8888/sparql';
    const headers = new HttpHeaders()
      .set('Accept', 'application/sparql-results+json');

    const params = new HttpParams()
      //.set('default-graph-uri', this.defaultGraphUri)
      //.set('query', this.testLastFiveDecretenEncoded);
      .set('default-graph-uri', encodeURI('https://data.vlaanderen.be/ns/wetgeving'))
      .set('query', encodeURI(this.lastFiveDecretenQuery));
    return this.http.get(baseUrl + this.queryDecretenUri, {headers});

  }
}
