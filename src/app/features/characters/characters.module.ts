import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListComponent } from './containers/characters-list/characters-list.component';
import { CharacterDetailsComponent } from './containers/character-details/character-details.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharactersFilterFormComponent } from './components/characters-filter-form/characters-filter-form.component';
import { CharacterDetailsCardComponent } from './components/character-details-card/character-details-card.component';

@NgModule({
  declarations: [
    CharactersListComponent,
    CharacterDetailsComponent,
    CharacterCardComponent,
    CharactersFilterFormComponent,
    CharacterDetailsCardComponent,
  ],
  imports: [CommonModule, CharactersRoutingModule, SharedModule],
})
export class CharactersModule {}
