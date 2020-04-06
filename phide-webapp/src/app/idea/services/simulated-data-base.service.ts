import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { Dimension } from "src/app/shared/types/dimension";
import { Idea } from "src/app/shared/types/idea";
import { Ideology } from "src/app/shared/types/ideology";
import { Axis } from "src/app/shared/types/axis";
import { Value } from "src/app/shared/types/value";
import { MagicTriangle } from "src/app/shared/types/magic-triangle";

@Injectable({
  providedIn: "root",
})
export class SimulatedDataBaseService {
  _dimensions = {
    economical: new Dimension("economical"),
    cultural: new Dimension("cultural"),
    statist: new Dimension("statist"),
    wacky: new Dimension("wacky"),
    environmentalist: new Dimension("environmentalist"),
  };

  private readonly dimensions = [this._dimensions.economical];

  private readonly _ideas = [
    new Idea("communism", [
      { dimension: this._dimensions.economical, percentage: 0 },
      { dimension: this._dimensions.cultural, percentage: 5 },
      { dimension: this._dimensions.statist, percentage: 90 },
      { dimension: this._dimensions.wacky, percentage: 10 },
    ]),
    new Idea("posadism", [
      { dimension: this._dimensions.economical, percentage: 0 },
      { dimension: this._dimensions.cultural, percentage: 5 },
      { dimension: this._dimensions.statist, percentage: 90 },
      { dimension: this._dimensions.wacky, percentage: 95 },
    ]),

    new Idea("facism", [
      { dimension: this._dimensions.cultural, percentage: 100 },
      { dimension: this._dimensions.statist, percentage: 90 },
    ]),
    new Idea("ecofacism", [
      { dimension: this._dimensions.cultural, percentage: 100 },
      { dimension: this._dimensions.statist, percentage: 90 },
      { dimension: this._dimensions.environmentalist, percentage: 80 },
      { dimension: this._dimensions.wacky, percentage: 10 },
    ]),
    new Idea("national_bolshevism", [
      { dimension: this._dimensions.economical, percentage: 0 },
      { dimension: this._dimensions.cultural, percentage: 100 },
      { dimension: this._dimensions.statist, percentage: 90 },
      { dimension: this._dimensions.wacky, percentage: 50 },
    ]),
    new Idea("anarcho_facism", [
      { dimension: this._dimensions.cultural, percentage: 100 },
      { dimension: this._dimensions.statist, percentage: 0 },
      { dimension: this._dimensions.wacky, percentage: 30 },
    ]),
    new Idea("nazism", [
      { dimension: this._dimensions.economical, percentage: 50 },
      { dimension: this._dimensions.cultural, percentage: 100 },
      { dimension: this._dimensions.statist, percentage: 90 },
      { dimension: this._dimensions.wacky, percentage: 10 },
    ]),
  ];

  private readonly _axes = {
    economic: new Axis("economic", new Value("equality"), new Value("markets")),
    cultural: new Axis(
      "cultural",
      new Value("progress"),
      new Value("tradition")
    ),
    security: new Axis(
      "security",
      new Value("freedom"),
      new Value("authority")
    ),
    wackiness: new Axis("wackiness", new Value("tame"), new Value("wacky")),
    cultural_acceleration: new Axis(
      "cultural_acceleration",
      new Value("deacceleration"),
      new Value("acceleration")
    ),
    technological_acceleration: new Axis(
      "technological_acceleration",
      new Value("deacceleration"),
      new Value("acceleration")
    ),
    economic_acceleration: new Axis(
      "economic_acceleration",
      new Value("deacceleration"),
      new Value("acceleration")
    ),
    esoteric_materialistic: new Axis(
      "esoteric_materialistic",
      new Value("esoteric"),
      new Value("materialistic")
    ),
    gay: new Axis("gay", new Value("inclusive"), new Value("exclusive")),
    race: new Axis("race", new Value("inclusive"), new Value("exclusive")),
    bi: new Axis("bi", new Value("inclusive"), new Value("exclusive")),
    age: new Axis("age", new Value("inclusive"), new Value("exclusive")),
    trans: new Axis("trans", new Value("inclusive"), new Value("exclusive")),
    disabled: new Axis(
      "disabled",
      new Value("inclusive"),
      new Value("exclusive")
    ),
    queer: new Axis("queer", new Value("inclusive"), new Value("exclusive")),
    exclusive_people: new Axis(
      "exclusive_people",
      new Value("inclusive"),
      new Value("exclusive")
    ),
    extremity: new Axis(
      "extremity",
      new Value("non_extreme"),
      new Value("extreme")
    ),
    personal_political_violence: new Axis(
      "personal_political_violence",
      new Value("no_violence"),
      new Value("lots_of_violence")
    ),
    morality: new Axis("morality", new Value("amoral"), new Value("moral")),
    collectivism_individualism: new Axis(
      "collectivism_individualism",
      new Value("collectivism"),
      new Value("individualism")
    ),
    alternate_timeline: new Axis(
      "alternate_timeline",
      new Value("no"),
      new Value("yes")
    ),
    watch_anime: new Axis("watch_anime", new Value("no"), new Value("yes")),
    foreign_military_policy: new Axis(
      "foreign_military_policy",
      new Value("direct_military_intervention"),
      new Value("no_military_intervention")
    ),
    foreign_politics: new Axis(
      "foreign_politics",
      new Value("dont_care"),
      new Value("care")
    ),
    taxing_billionaires: new Axis(
      "taxing_billionaires",
      new Value("0"),
      new Value("100")
    ),
    inheritance: new Axis(
      "inheritance",
      new Value("high_parental_advantage"),
      new Value("low_parental_advantage")
    ),
    control_over_wealth: new MagicTriangle(
      "control_over_wealth",
      new Value("people"),
      new Value("corp"),
      new Value("state")
    ),
    in_regret: new Axis("in_regret", new Value("0"), new Value("100")),
    environmental: new Axis(
      "environmental",
      new Value("protection"),
      new Value("reckless")
    ),
    racial_eugenics: new Axis(
      "racial_eugenics",
      new Value("no_euthanization"),
      new Value("euthanization")
    ),
    economic_eugenics: new Axis(
      "economic_eugenics",
      new Value("no_euthanization"),
      new Value("euthanization")
    ),
    abled_eugenics: new Axis(
      "abled_eugenics",
      new Value("no_euthanization"),
      new Value("euthanization")
    ),
    iq_eugenics: new Axis(
      "iq_eugenics",
      new Value("no_euthanization"),
      new Value("euthanization")
    ),
    ideological_eugenics: new Axis(
      "ideological_eugenics",
      new Value("no_euthanization"),
      new Value("euthanization")
    ),
    natalism: new Axis(
      "natalism",
      new Value("antinatalist"),
      new Value("natalist")
    ),
    intelligence: new Axis("intelligence", new Value("low"), new Value("high")),
    happiness: new Axis("happiness", new Value("happy"), new Value("sad")),
    anxiety: new Axis(
      "anxiety",
      new Value("not_anxious"),
      new Value("constantly_anxious")
    ),
    technological_threat: new Axis(
      "technological_threat",
      new Value("no_threat"),
      new Value("big_threat")
    ),
    would_work_in_upper_dimensions: new Axis(
      "would_work_in_upper_dimensions",
      new Value("no"),
      new Value("yes")
    ),
    possibility: new Axis("possibility", new Value("low"), new Value("high")),
    correct_ussr_opinion: new Axis(
      "correct_ussr_opinion",
      new Value("no"),
      new Value("yes")
    ),
    has_been_tried: new Axis(
      "has_been_tried",
      new Value("no"),
      new Value("yes")
    ),
    will_to_live: new Axis("will_to_live", new Value("lo"), new Value("high")),
    lonely: new Axis("lonely", new Value("no"), new Value("yes")),
    empty: new Axis("empty", new Value("no"), new Value("yes")),

    topia: new Axis("topia", new Value("eutopia"), new Value("dystopia")),
    oomer: new Axis("oomer", new Value("doomer"), new Value("bloomer")),
    sex_appeal: new Axis("sex_appeal", new Value("low"), new Value("high")),
    friendship_likelihood: new Axis(
      "friendship_likelihood",
      new Value("low"),
      new Value("high")
    ),
    cry_for_help: new Axis("cry_for_help", new Value("no"), new Value("help")),
    drug_use_likelihood: new Axis(
      "drug_use_likelihood",
      new Value("low"),
      new Value("high")
    ),
    smoke_likelihood: new Axis(
      "smoke_likelihood",
      new Value("low"),
      new Value("high")
    ),
    reading_theory_likelihood: new Axis(
      "reading_theory_likelihood",
      new Value("low"),
      new Value("high")
    ),
    praxis_theory: new Axis(
      "praxis_theory",
      new Value("praix"),
      new Value("theory")
    ),
    guilt_using_dark_humor: new Axis(
      "guilty_using_dark_humor",
      new Value("no_guilt"),
      new Value("high_guilt")
    ),
    political_correctness: new Axis(
      "political_correctness",
      new Value("no"),
      new Value("yes")
    ),
    slur_intent: new MagicTriangle(
      "slur_intent",
      new Value("hostility"),
      new Value("discussion"),
      new Value("free_speech_absolutism")
    ),
    friends: new Axis("friends", new Value("none"), new Value("lots")),
    willingness_to_improve: new Axis(
      "willingness_to_improve",
      new Value("no"),
      new Value("yes")
    ),
    can_meme: new Axis("can_meme", new Value("no"), new Value("yes")),
    gamer: new Axis("gamer", new Value("no"), new Value("yes")),
    globalism_isolationism: new Axis(
      "globalism_isolationism",
      new Value("globalist"),
      new Value("isolationist")
    ),
    having_game: new Axis("having_game", new Value("no"), new Value("yes")),
    religious: new Axis(
      "religious",
      new Value("secular"),
      new Value("religious")
    ),
    colonialism: new Axis(
      "colonialism",
      new Value("decolonialism"),
      new Value("colonialism")
    ),
    infighting_likelihood: new Axis(
      "infighting_likelihood",
      new Value("low"),
      new Value("high")
    ),
    demand_for_war: new Axis(
      "demand_for_war",
      new Value("pacifism"),
      new Value("jingoism")
    ),
    dank_normie: new Axis(
      "dank_normie",
      new Value("dank"),
      new Value("normie")
    ),
    age_appeal: new Axis(
      "age_appeal",
      new Value("boomer"),
      new Value("zoomer")
    ),
    monarchy: new Axis(
      "monarchy",
      new Value("no monarchy"),
      new Value("absolute monarchy")
    ),
    smugness: new Axis("smugness", new Value("low"), new Value("high")),
    wishy_washyness: new Axis(
      "wishy_washy",
      new Value("wishy_washy"),
      new Value("immovable")
    ),
    punishment: new Axis(
      "punishment",
      new Value("rehabilitation"),
      new Value("retribution")
    ),
    climate_change: new Axis(
      "climate_change",
      new Value("dont_think_about_it"),
      new Value("think_about_it_too_much")
    ),
    sympathy_for_centrists: new Axis(
      "sympathy_for_centrists",
      new Value("sympathy"),
      new Value("no_sympathy")
    ),
    tolerance_of_opposing_beliefs: new Axis(
      "tolerance_of_opposing_beliefs",
      new Value("tolerant"),
      new Value("intolerant")
    ),
    nature_nurture: new Axis(
      "nature_nurture",
      new Value("constructivist"),
      new Value("essentialist")
    ),
    small_genocidal_likelihood: new Axis(
      "small_genocidal_likelihood",
      new Value("low"),
      new Value("high")
    ),
    big_genocidal_likelihood: new Axis(
      "big_genocidal_likelihood",
      new Value("low"),
      new Value("high")
    ),
    levels_of_irony: new Axis(
      "levels_of_irony",
      new Value("0"),
      new Value("2")
    ),
    reactionism: new Axis(
      "reactionism",
      new Value("reactionary"),
      new Value("non_reactionary")
    ),
    wing_reactionism: new Axis(
      "wing_reactionism",
      new Value("left"),
      new Value("right")
    ),
    realism: new Axis(
      "realism",
      new Value("idealistic"),
      new Value("realistic")
    ),
    evil_good: new Axis("evil_good", new Value("evil"), new Value("good")),
    chaotic_lawful: new Axis(
      "chaotic_lawful",
      new Value("chaotic"),
      new Value("lawful")
    ),
    palestine_israel: new Axis(
      "palestine_israel",
      new Value("palestine"),
      new Value("israel")
    ),
    act_for_ideology_likelihood: new Axis(
      "act_for_ideology_likelihood",
      new Value("low"),
      new Value("high")
    ),
    fortnite_minecraft: new Axis(
      "fortnite_minecraft",
      new Value("fortnite"),
      new Value("minecraft")
    ),
    revolution_reform: new Axis(
      "revolution_reform",
      new Value("revolution"),
      new Value("reformism")
    ),
    metaphorical_manhood: new Axis(
      "metaphorical_manhood",
      new Value("tiny"),
      new Value("huge")
    ),
    pencil_amount: new Axis(
      "pencil_amount",
      new Value("low"),
      new Value("high")
    ),
    multiculturalism_assimilationism: new Axis(
      "multiculturalism_assimilationism",
      new Value("multiculturalism"),
      new Value("assimilationism")
    ),
    power_concentration: new Axis(
      "power_concentration",
      new Value("federal"),
      new Value("unitary")
    ),
    decision_making: new Axis(
      "decision_making",
      new Value("direct_democracy"),
      new Value("dictator")
    ),
  };
  private readonly _ideologies = [
    // new Ideology("communism", [
    //   { axis: this._axes.society, percentage: 10 },
    //   { axis: this._axes.religion, percentage: 0 },
    //   { axis: this._axes.economic, percentage: 0 },
    //   { axis: this._axes.governing_system, percentage: 100 },
    //   { axis: this._axes.cultural_identities, percentage: 50 },
    //   { axis: this._axes.military_action, percentage: 50 },
    //   { axis: this._axes.statist, percentage: 100 },
    //   { axis: this._axes.diplomatic, percentage: 50 },
    //   { axis: this._axes.civil, percentage: 100 },
    // ]),
  ];
  public dimensions$(): Observable<string> {
    return of(JSON.stringify(Object.values(this._dimensions)));
  }
  public ideas$(): Observable<string> {
    return of(JSON.stringify(this._ideas));
  }
  public axes$(): Observable<string> {
    return of(JSON.stringify(Object.values(this._axes)));
  }
  constructor() {}
}
