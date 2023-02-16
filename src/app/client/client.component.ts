import { Component, OnInit } from '@angular/core';
import {faBuildingUser} from "@fortawesome/free-solid-svg-icons";
import { clients } from 'src/client-database/clients';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent{
  userIcon = faBuildingUser

  clientArr: clients[] = [
    new clients(172391341, "John Williams", "house", "Blueprints", "123-454-7985", "California"),
    new clients(298476621, "Alfred Owen", "mall", "Negotiations", "123-456-7985", "Kansas"),
    new clients(847575782021, "Kimberly Connor", "house complex", "building", "123-456-7985", "Texas")
  ]
}
