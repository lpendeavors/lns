import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ContactImportService } from 'src/app/core';

@Component({
  selector: 'lns-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @Output() finished = new EventEmitter<void>();
  fileLabel: string;
  
  constructor(private contactsImport: ContactImportService) { }

  ngOnInit() {
  }

  fileAdded(files: FileList) {
    if (files && files.length > 0) {
      let file = files.item(0);
      this.fileLabel = file.name;
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: string = reader.result as string;
        const allTextLines = csv.split(/\n/);
        const headers = allTextLines[0].split(',');
        let lines = [];
        for (let i = 0; i < allTextLines.length; i++) {
          // split content based on comma
          let data = this.csvToArray(allTextLines[i])[0];
          if (data.length > 1) {
            lines.push(data);
          }
        }
        this.contactsImport.importList.next(lines);
      }
    }
  }

  import() {
    this.finished.next();
  }

  private csvToArray(text: string) {
    let p = '', row = [''], ret = [row], i = 0, r = 0, s = !0, l;
    for (l of text) {
        if ('"' === l) {
            if (s && l === p) row[i] += l;
            s = !s;
        } else if (',' === l && s) l = row[++i] = '';
        else if ('\n' === l && s) {
            if ('\r' === p) row[i] = row[i].slice(0, -1);
            row = ret[++r] = [l = '']; i = 0;
        } else row[i] += l;
        p = l;
    }
    return ret;
  };
}
