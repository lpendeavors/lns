import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'campaigns',
        loadChildren: './modules/campaigns/campaigns.module#CampaignsModule'
    },
    {
        path: 'contacts',
        loadChildren: './modules/contacts/contacts.module#ContactsModule'
    },
    {
        path: 'messages',
        loadChildren: './modules/messages/messages.module#MessagesModule'
    },
    {
        path: 'conversations',
        loadChildren: './modules/conversations/conversations.module#ConversationsModule'
    },
    {
        path: 'groups',
        loadChildren: './modules/groups/groups.module#GroupsModule'
    },
    {
        path: 'segments',
        loadChildren: './modules/segments/segments.module#SegmentsModule'
    },
    {
        path: 'reviews',
        loadChildren: './modules/reviews/reviews.module#ReviewsModule'
    },
    {
        path: 'settings',
        loadChildren: './modules/settings/settings.module#SettingsModule'
    },
    {
        path: 'help',
        loadChildren: './modules/help/help.module#HelpModule'
    }
];