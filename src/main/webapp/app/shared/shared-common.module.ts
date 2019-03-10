import { NgModule } from '@angular/core';

import { CismSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CismSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CismSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CismSharedCommonModule {}
