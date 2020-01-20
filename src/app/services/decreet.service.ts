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
    "\n" +
    "\n" +
    "}ORDER BY DESC(?publicatieDatum)  LIMIT 5";

  constructor(private http: HttpClient) {
  }

  public getLastFiveDecreten(): any {
    const baseUrl = 'https://codex.opendata.api.vlaanderen.be:8888/sparql';
    const headers = new HttpHeaders()
      .set('Accept', 'application/sparql-results+json');

    const params = new HttpParams()
      .set('default-graph-uri', 'https://data.vlaanderen.be/ns/wetgeving')
      .set('query', this.lastFiveDecretenQuery);

    return this.http.get(baseUrl, {params, headers});

  }
}
