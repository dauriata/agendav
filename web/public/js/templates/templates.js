// calendar_basic_form_part.dust
(function(){dust.register("calendar_basic_form_part",body_0);function body_0(chk,ctx){return chk.exists(ctx._get(false, ["calendar"]),ctx,{"block":body_1},null).write("<input type=\"hidden\" name=\"is_shared_calendar\"value=\"").exists(ctx._get(false, ["shared"]),ctx,{"else":body_2,"block":body_3},null).write("\" />").partial("form_element_start",ctx,{"for":"displayname","label":"displayname"}).write("<input required autofocus name=\"displayname\" type=\"text\" size=\"25\" maxlength=\"255\" value=\"").exists(ctx._get(false, ["displayname"]),ctx,{"block":body_4},null).write("\" class=\"displayname form-control\" />").partial("form_element_end",ctx,null).partial("form_element_start",ctx,{"for":"color","label":"color"}).write("<input name=\"calendar_color\"value=\"").exists(ctx._get(false, ["color"]),ctx,{"else":body_5,"block":body_6},null).write("\" class=\"calendar_color pick_color form-control\" maxlength=\"7\" size=\"7\" />").partial("form_element_end",ctx,null).exists(ctx._get(false, ["public_url"]),ctx,{"block":body_7},null);}function body_1(chk,ctx){return chk.write("<input type=\"hidden\" name=\"calendar\" value=\"").reference(ctx._get(false, ["calendar"]),ctx,"h").write("\" />");}function body_2(chk,ctx){return chk.write("false");}function body_3(chk,ctx){return chk.write("true");}function body_4(chk,ctx){return chk.reference(ctx._get(false, ["displayname"]),ctx,"h");}function body_5(chk,ctx){return chk.reference(ctx._get(false, ["default_calendar_color"]),ctx,"h");}function body_6(chk,ctx){return chk.reference(ctx._get(false, ["color"]),ctx,"h");}function body_7(chk,ctx){return chk.write("<div class=\"public_url_container\"><i class=\"fa fa-lg fa-link\"></i> <a href=\"").reference(ctx._get(false, ["public_url"]),ctx,"h").write("\">").helper("i18n",ctx,{},{"type":"labels","name":"publicurl"}).write("</p></a></div>");}return body_0;})();
 // calendar_create_dialog.dust
(function(){dust.register("calendar_create_dialog",body_0);function body_0(chk,ctx){return chk.write("<div id=\"calendar_create_dialog\">").partial("form_open",ctx,{"applyclass":"form-horizontal","applyid":"calendar_create_form"}).partial("calendar_basic_form_part",ctx,null).partial("form_close",ctx,null).write("</div>");}return body_0;})();
 // calendar_delete_dialog.dust
(function(){dust.register("calendar_delete_dialog",body_0);function body_0(chk,ctx){return chk.write("<div id=\"calendar_delete_dialog\">").partial("form_open",ctx,null).write("<input type=\"hidden\" name=\"calendar\" value=\"").reference(ctx._get(false, ["calendar"]),ctx,"h").write("\" /><p>").helper("i18n",ctx,{},{"type":"messages","name":"info_confirmcaldelete"}).write("</p><p><div class=\"calendar_color\" style=\"background-color: ").reference(ctx._get(false, ["color"]),ctx,"h").write(";\"></div> ").reference(ctx._get(false, ["displayname"]),ctx,"h").write("</p><p>").helper("i18n",ctx,{},{"type":"messages","name":"info_permanentremoval"}).write("</p>").partial("form_close",ctx,null).write("</div>");}return body_0;})();
 // calendar_list_entry.dust
(function(){dust.register("calendar_list_entry",body_0);function body_0(chk,ctx){return chk.write("<li data-calendar-url=\"").reference(ctx._get(false, ["url"]),ctx,"h").write("\" class=\"available_calendar").exists(ctx._get(false, ["default_calendar"]),ctx,{"block":body_1},null).write("\"><i class=\"calendar_color fa fa-lg fa-square fa-li\" style=\"color: ").exists(ctx._get(false, ["color"]),ctx,{"else":body_2,"block":body_3},null).write("\"></i><span class=\"icons\">").exists(ctx._get(false, ["shared"]),ctx,{"else":body_4,"block":body_6},null).write("</span><span class=\"text\"").exists(ctx._get(false, ["grantor"]),ctx,{"block":body_9},null).write(">").reference(ctx._get(false, ["displayname"]),ctx,"h").write("</span><i title=\"").helper("i18n",ctx,{},{"type":"labels","name":"modifycalendar"}).write("\" class=\"cfg pseudobutton fa fa-cogs\"></i></li>");}function body_1(chk,ctx){return chk.write(" default_calendar");}function body_2(chk,ctx){return chk.reference(ctx._get(false, ["default_calendar_color"]),ctx,"h");}function body_3(chk,ctx){return chk.reference(ctx._get(false, ["color"]),ctx,"h");}function body_4(chk,ctx){return chk.exists(ctx._get(false, ["share_with"]),ctx,{"block":body_5},null);}function body_5(chk,ctx){return chk.write("<i title=\"").helper("i18n",ctx,{},{"type":"labels","name":"currentlysharing"}).write("\" class=\"fa fa-share\"></i>");}function body_6(chk,ctx){return chk.helper("eq",ctx,{"block":body_7},{"key":body_8,"value":"0"});}function body_7(chk,ctx){return chk.write("<i title=\"").helper("i18n",ctx,{},{"type":"labels","name":"readonly"}).write("\" class=\"fa fa-lock\"></i>");}function body_8(chk,ctx){return chk.reference(ctx._get(false, ["rw"]),ctx,"h");}function body_9(chk,ctx){return chk.write("title=\"").helper("i18n",ctx,{},{"type":"messages","name":"info_sharedby","user":body_10}).write("\"");}function body_10(chk,ctx){return chk.reference(ctx._get(false, ["grantor"]),ctx,"h");}return body_0;})();
 // calendar_modify_dialog.dust
(function(){dust.register("calendar_modify_dialog",body_0);function body_0(chk,ctx){return chk.write("<div id=\"calendar_modify_dialog\"><ul class=\"nav nav-tabs\"><li class=\"active\"><a href=\"#tabs-general\" data-toggle=\"tab\"><i class=\"tab-icon fa fa-tag\"></i>").helper("i18n",ctx,{},{"type":"labels","name":"generaloptions"}).write("</a></li>").exists(ctx._get(false, ["enable_calendar_sharing"]),ctx,{"block":body_1},null).write("</ul><div class=\"tab-content\">").partial("form_open",ctx,{"applyclass":"form-horizontal","applyid":"calendar_modify_form"}).write("<div id=\"tabs-general\" class=\"tab-pane active\">").exists(ctx._get(false, ["grantor"]),ctx,{"block":body_3},null).partial("calendar_basic_form_part",ctx,null).write("</div>").exists(ctx._get(false, ["enable_calendar_sharing"]),ctx,{"block":body_7},null).partial("form_close",ctx,null).write("</div><!-- tab-content --></div>");}function body_1(chk,ctx){return chk.notexists(ctx._get(false, ["shared"]),ctx,{"block":body_2},null);}function body_2(chk,ctx){return chk.write("<li><a href=\"#tabs-share\" data-toggle=\"tab\"><i class=\"tab-icon fa fa-group\"></i>").helper("i18n",ctx,{},{"type":"labels","name":"shareoptions"}).write("</a></li>");}function body_3(chk,ctx){return chk.write("<div class=\"share_info ui-corner-all\">").helper("i18n",ctx,{},{"type":"messages","name":"info_sharedby","user":body_4}).write(" ").helper("eq",ctx,{"block":body_5},{"key":body_6,"value":"0"}).write("</div>");}function body_4(chk,ctx){return chk.reference(ctx._get(false, ["grantor"]),ctx,"h");}function body_5(chk,ctx){return chk.write("(").helper("i18n",ctx,{},{"type":"labels","name":"readonly"}).write(")");}function body_6(chk,ctx){return chk.reference(ctx._get(false, ["rw"]),ctx,"h");}function body_7(chk,ctx){return chk.notexists(ctx._get(false, ["shared"]),ctx,{"block":body_8},null);}function body_8(chk,ctx){return chk.write("<div id=\"tabs-share\" class=\"tab-pane\">").partial("calendar_share_table",ctx,null).write("</div>");}return body_0;})();
 // calendar_share_access_options.dust
(function(){dust.register("calendar_share_access_options",body_0);function body_0(chk,ctx){return chk.write(" <option value=\"0\"").helper("eq",ctx,{"block":body_1},{"key":body_2,"value":"0"}).write(">").helper("i18n",ctx,{},{"type":"labels","name":"readonly"}).write("</option><option value=\"1\"").helper("eq",ctx,{"block":body_3},{"key":body_4,"value":"1"}).write(">").helper("i18n",ctx,{},{"type":"labels","name":"readandwrite"}).write("</option>");}function body_1(chk,ctx){return chk.write(" selected=\"true\"");}function body_2(chk,ctx){return chk.reference(ctx._get(false, ["rw"]),ctx,"h");}function body_3(chk,ctx){return chk.write(" selected=\"true\"");}function body_4(chk,ctx){return chk.reference(ctx._get(false, ["rw"]),ctx,"h");}return body_0;})();
 // calendar_share_row.dust
(function(){dust.register("calendar_share_row",body_0);function body_0(chk,ctx){return chk.write("<tr><td><span class=\"username\">").reference(ctx._get(false, ["username"]),ctx,"h").write("</span></td><td><input type=\"hidden\" name=\"share_with[sid][]\" value=\"").reference(ctx._get(false, ["sid"]),ctx,"h").write("\"/><input type=\"hidden\" name=\"share_with[username][]\" value=\"").reference(ctx._get(false, ["username"]),ctx,"h").write("\"/><select name=\"share_with[rw][]\" class=\"input-medium\">").partial("calendar_share_access_options",ctx,null).write("</select></td><td><img src=\"").reference(ctx._get(false, ["base_url"]),ctx,"h").write("img/delete.png\" class=\"calendar_share_delete pseudobutton\" alt=\"").helper("i18n",ctx,{},{"type":"labels","name":"delete"}).write("\"title=\"").helper("i18n",ctx,{},{"type":"labels","name":"delete"}).write("\" /></td></tr>");}return body_0;})();
 // calendar_share_table.dust
(function(){dust.register("calendar_share_table",body_0);function body_0(chk,ctx){return chk.write("<table id=\"calendar_share_table\" class=\"table table-striped\"><thead><th>").helper("i18n",ctx,{},{"type":"labels","name":"username"}).write("</th><th>").helper("i18n",ctx,{},{"type":"labels","name":"access"}).write("</th><th></th></thead><tbody>").section(ctx._get(false, ["grantee"]),ctx,{"block":body_1},null).write("<tr id=\"calendar_share_no_rows\"><td colspan=\"3\">").helper("i18n",ctx,{},{"type":"messages","name":"info_notshared"}).write("</td></tr></tbody></table><span class=\"table_title\">").helper("i18n",ctx,{},{"type":"labels","name":"sharewith"}).write("</span><table id=\"calendar_share_add\" class=\"table-condensed\"><tbody><tr><td><div class=\"username\"><input name=\"autocomplete_username\"class=\"input-medium\" id=\"calendar_share_add_username\"value=\"\" maxlength=\"255\" size=\"10\" /></div></td><td><select name=\"write-access\" id=\"calendar_share_add_write_access\"class=\"input-medium\">").partial("calendar_share_access_options",ctx,null).write("</select></td><td><img src=\"").reference(ctx._get(false, ["base_url"]),ctx,"h").write("img/add.png\" id=\"calendar_share_add_button\"class=\"pseudobutton\"alt=\"").helper("i18n",ctx,{},{"type":"labels","name":"add"}).write("title=\"").helper("i18n",ctx,{},{"type":"labels","name":"add"}).write(" /></td></tr></tbody></table>");}function body_1(chk,ctx){return chk.partial("calendar_share_row",ctx,null);}return body_0;})();
 // datepicker_button.dust
(function(){dust.register("datepicker_button",body_0);function body_0(chk,ctx){return chk.write("<i class=\"btn fa fa-calendar\" title=\"").helper("i18n",ctx,{},{"type":"labels","name":"choose_date"}).write("\"></i><input type=\"text\" style=\"width: 0;height: 0;border:0;\" id=\"datepicker_fullcalendar\" />");}return body_0;})();
 // event_basic_form_part.dust
(function(){dust.register("event_basic_form_part",body_0);function body_0(chk,ctx){return chk.exists(ctx._get(false, ["uid"]),ctx,{"block":body_1},null).partial("form_element_start",ctx,{"for":"summary","label":"summary"}).write("<input required name=\"summary\" type=\"text\" size=\"25\" maxlength=\"255\" value=\"").reference(ctx._get(false, ["title"]),ctx,"h").write("\" class=\"summary form-control\" />").partial("form_element_end",ctx,null).partial("form_element_start",ctx,{"for":"location","label":"location"}).write("<input name=\"location\" type=\"text\" size=\"25\" maxlength=\"255\" value=\"").reference(ctx._get(false, ["location"]),ctx,"h").write("\" class=\"location form-control\" />").partial("form_element_end",ctx,null).partial("form_element_start",ctx,{"for":"calendar","label":"calendar"}).write("<select name=\"calendar\" class=\"form-control\">").section(ctx._get(false, ["calendars"]),ctx,{"block":body_2},{"current_calendar":ctx._get(false, ["calendar"])}).write("</select>").partial("form_element_end",ctx,null).write("<div class=\"generate-iso8601\" data-only-date-if-checked=\"input.allday\"><input class=\"generated\" type=\"hidden\" name=\"start\" />").partial("form_element_start",ctx,{"for":"start_date","label":"startdate"}).write("<div class=\"row\"><div class=\"col-sm-4\"><input required name=\"start_date\" type=\"text\" size=\"15\" maxlength=\"10\" value=\"").reference(ctx._get(false, ["start_date"]),ctx,"h").write("\"class=\"start_date date form-control\" /></div><div class=\"col-sm-3\"><input required name=\"start_time\" type=\"text\" size=\"15\" maxlength=\"10\" value=\"").reference(ctx._get(false, ["start_time"]),ctx,"h").write("\" class=\"start_time time form-control\" /></div></div>").partial("form_element_end",ctx,null).write("</div><div class=\"generate-iso8601\" data-only-date-if-checked=\"input.allday\"><input class=\"generated\" type=\"hidden\" name=\"end\">").partial("form_element_start",ctx,{"for":"end_date","label":"enddate"}).write("<div class=\"row\"><div class=\"col-sm-4\"><input required name=\"end_date\" type=\"text\" size=\"15\" maxlength=\"10\" value=\"").reference(ctx._get(false, ["end_date"]),ctx,"h").write("\" class=\"end_date date form-control\" /></div><div class=\"col-sm-3\"><input required name=\"end_time\" type=\"text\" size=\"15\" maxlength=\"10\" value=\"").reference(ctx._get(false, ["end_time"]),ctx,"h").write("\" class=\"time end_time time form-control\" /></div></div>").partial("form_element_end",ctx,null).write("</div>").partial("form_element_start",ctx,{"for":"allday","label":"alldayform"}).write("<input type=\"checkbox\" name=\"allday\" class=\"allday\" value=\"true\" ").exists(ctx._get(false, ["allDay"]),ctx,{"block":body_6},null).write(" />").partial("form_element_end",ctx,null).partial("form_element_start",ctx,{"for":"description","label":"description"}).write("<textarea name=\"description\" class=\"form-control\" rows=\"4\">").reference(ctx._get(false, ["description"]),ctx,"h").write("</textarea>").partial("form_element_end",ctx,null);}function body_1(chk,ctx){return chk.write("<input type=\"hidden\" name=\"modification\" value=\"true\" /><input type=\"hidden\" name=\"uid\" value=\"").reference(ctx._get(false, ["uid"]),ctx,"h").write("\" /><input type=\"hidden\" name=\"href\" value=\"").reference(ctx._get(false, ["href"]),ctx,"h").write("\" /><input type=\"hidden\" name=\"etag\" value=\"").reference(ctx._get(false, ["etag"]),ctx,"h").write("\" /><input type=\"hidden\" name=\"original_calendar\" value=\"").reference(ctx._get(false, ["calendar"]),ctx,"h").write("\" />");}function body_2(chk,ctx){return chk.write("<option value=\"").reference(ctx._get(false, ["url"]),ctx,"h").write("\"").helper("eq",ctx,{"block":body_3},{"key":body_4,"value":body_5}).write(">").reference(ctx._get(false, ["displayname"]),ctx,"h").write("</option>");}function body_3(chk,ctx){return chk.write(" selected=\"selected\"");}function body_4(chk,ctx){return chk.reference(ctx._get(false, ["calendar"]),ctx,"h");}function body_5(chk,ctx){return chk.reference(ctx._get(false, ["current_calendar"]),ctx,"h");}function body_6(chk,ctx){return chk.write("checked=\"checked\"");}return body_0;})();
 // event_delete_dialog.dust
(function(){dust.register("event_delete_dialog",body_0);function body_0(chk,ctx){return chk.write("<div id=\"event_delete_dialog\">").partial("form_open",ctx,null).write("<input type=\"hidden\" name=\"calendar\" value=\"").reference(ctx._get(false, ["calendar"]),ctx,"h").write("\" /><input type=\"hidden\" name=\"uid\" value=\"").reference(ctx._get(false, ["uid"]),ctx,"h").write("\" /><input type=\"hidden\" name=\"href\" value=\"").reference(ctx._get(false, ["href"]),ctx,"h").write("\" /><input type=\"hidden\" name=\"etag\" value=\"").reference(ctx._get(false, ["etag"]),ctx,"h").write("\" /><p>").helper("i18n",ctx,{},{"type":"messages","name":"info_confirmeventdelete"}).write("</p><p class=\"title\">").reference(ctx._get(false, ["title"]),ctx,"h").write("</p>").exists(ctx._get(false, ["rrule"]),ctx,{"block":body_1},null).partial("form_close",ctx,null).write("</div>");}function body_1(chk,ctx){return chk.write("<p>").helper("i18n",ctx,{},{"type":"messages","name":"info_repetitivedeleteall"}).write("</p>");}return body_0;})();
 // event_details_popup.dust
(function(){dust.register("event_details_popup",body_0);function body_0(chk,ctx){return chk.write("<p class=\"start_and_finish\">").reference(ctx._get(false, ["readable_dates"]),ctx,"h").write("</p><dl class=\"dl-horizontal\"><dt>").helper("i18n",ctx,{},{"type":"labels","name":"calendar"}).write("</dt><dd><i class=\"calendar_color fa fa-lg fa-square\" style=\"color: ").reference(ctx._get(false,["caldata","color"]),ctx,"h").write("\"></i>").reference(ctx._get(false,["caldata","displayname"]),ctx,"h").write("</dd>").exists(ctx._get(false, ["location"]),ctx,{"block":body_1},null).exists(ctx._get(false, ["description"]),ctx,{"block":body_2},null).exists(ctx._get(false, ["rrule"]),ctx,{"block":body_3},null).section(ctx._get(false, ["reminders"]),ctx,{"block":body_4},null).write("</dl>").notexists(ctx._get(false, ["disable_actions"]),ctx,{"block":body_5},null);}function body_1(chk,ctx){return chk.write("<dt>").helper("i18n",ctx,{},{"type":"labels","name":"location"}).write("</dt><dd>").reference(ctx._get(false, ["location"]),ctx,"h").write("</dd>");}function body_2(chk,ctx){return chk.write("<dt>").helper("i18n",ctx,{},{"type":"labels","name":"description"}).write("</dt><dd>").reference(ctx._get(false, ["description"]),ctx,"h").write("</dd>");}function body_3(chk,ctx){return chk.write("<dt>").helper("i18n",ctx,{},{"type":"labels","name":"repeat"}).write("</dt><dd>").reference(ctx._get(false, ["rrule_explained"]),ctx,"h").write("<span");}function body_4(chk,ctx){return chk.write("<dt>").helper("i18n",ctx,{},{"type":"labels","name":"reminder"}).write("</dt><dd>").partial("reminder_description",ctx,null).write("</dd>");}function body_5(chk,ctx){return chk.write("<div class=\"actions\"><span class=\"right\"><a href=\"javascript:void(0)\" class=\"modify\">").helper("i18n",ctx,{},{"type":"labels","name":"modify"}).write("</a></span><span class=\"left\"><a href=\"javascript:void(0)\" class=\"remove\">").helper("i18n",ctx,{},{"type":"labels","name":"delete"}).write("</a></span></div>");}return body_0;})();
 // event_edit_dialog.dust
(function(){dust.register("event_edit_dialog",body_0);function body_0(chk,ctx){return chk.write("<div id=\"event_edit_dialog\">").partial("form_open",ctx,{"applyclass":"form-horizontal","applyid":"event_edit_form"}).write("<ul class=\"nav nav-tabs\" role=\"tablist\"><li role=\"presentation\" class=\"active\"><a role=\"tab\" href=\"#tabs-general\" data-toggle=\"tab\"><i class=\"tab-icon fa fa-tag\"></i>").helper("i18n",ctx,{},{"type":"labels","name":"generaloptions"}).write("</a></li><li role=\"presentation\"><a role=\"tab\" href=\"#tabs-recurrence\" data-toggle=\"tab\"><i class=\"tab-icon fa fa-repeat\"></i>").helper("i18n",ctx,{},{"type":"labels","name":"repeatoptions"}).write("</a></li><li role=\"presentation\"><a role=\"tab\" href=\"#tabs-reminders\" data-toggle=\"tab\"><i class=\"tab-icon fa fa-bell\"></i>").helper("i18n",ctx,{},{"type":"labels","name":"remindersoptions"}).write("</a></li><li role=\"presentation\"><a role=\"tab\" href=\"#tabs-workgroup\" data-toggle=\"tab\"><i class=\"tab-icon fa fa-group\"></i>").helper("i18n",ctx,{},{"type":"labels","name":"workgroupoptions"}).write("</a></li></ul><div class=\"tab-content\"><div role=\"tabpanel\" class=\"tab-pane active\" id=\"tabs-general\">").partial("event_basic_form_part",ctx,null).write("</div><div role=\"tabpanel\" class=\"tab-pane\" id=\"tabs-recurrence\">").partial("repeat_rule_form",ctx,null).write("</div><div role=\"tabpanel\" class=\"tab-pane\" id=\"tabs-reminders\">").partial("reminders",ctx,null).write("</div><div role=\"tabpanel\" class=\"tab-pane\" id=\"tabs-workgroup\">").partial("form_element_start",ctx,{"for":"class","label":"privacy"}).write("<select name=\"class\" type=\"text\" class=\"form-control\"><option value=\"PUBLIC\"").helper("eq",ctx,{"block":body_1},{"key":body_2,"value":"PUBLIC"}).write(">").helper("i18n",ctx,{},{"type":"labels","name":"public"}).write("</option><option value=\"PRIVATE\"").helper("eq",ctx,{"block":body_3},{"key":body_4,"value":"PRIVATE"}).write(">").helper("i18n",ctx,{},{"type":"labels","name":"private"}).write("</option><option value=\"CONFIDENTIAL\"").helper("eq",ctx,{"block":body_5},{"key":body_6,"value":"CONFIDENTIAL"}).write(">").helper("i18n",ctx,{},{"type":"labels","name":"confidential"}).write("</option></select>").partial("form_element_end",ctx,null).partial("form_element_start",ctx,{"for":"transp","label":"transp"}).write("<select name=\"transp\" type=\"text\" class=\"form-control\"><option value=\"OPAQUE\"").helper("eq",ctx,{"block":body_7},{"key":body_8,"value":"OPAQUE"}).write(">").helper("i18n",ctx,{},{"type":"labels","name":"opaque"}).write("</option><option value=\"TRANSPARENT\"").helper("eq",ctx,{"block":body_9},{"key":body_10,"value":"TRANSPARENT"}).write(">").helper("i18n",ctx,{},{"type":"labels","name":"transparent"}).write("</option></select>").partial("form_element_end",ctx,null).write("</div></div><!-- tab-content -->").partial("form_close",ctx,null).write("</div>");}function body_1(chk,ctx){return chk.write(" selected=\"selected\"");}function body_2(chk,ctx){return chk.reference(ctx._get(false, ["icalendar_class"]),ctx,"h");}function body_3(chk,ctx){return chk.write(" selected=\"selected\"");}function body_4(chk,ctx){return chk.reference(ctx._get(false, ["icalendar_class"]),ctx,"h");}function body_5(chk,ctx){return chk.write(" selected=\"selected\"");}function body_6(chk,ctx){return chk.reference(ctx._get(false, ["icalendar_class"]),ctx,"h");}function body_7(chk,ctx){return chk.write(" selected=\"selected\"");}function body_8(chk,ctx){return chk.reference(ctx._get(false, ["transp"]),ctx,"h");}function body_9(chk,ctx){return chk.write(" selected=\"selected\"");}function body_10(chk,ctx){return chk.reference(ctx._get(false, ["transp"]),ctx,"h");}return body_0;})();
 // form_close.dust
(function(){dust.register("form_close",body_0);function body_0(chk,ctx){return chk.write("</form>");}return body_0;})();
 // form_element_end.dust
(function(){dust.register("form_element_end",body_0);function body_0(chk,ctx){return chk.exists(ctx._get(false, ["input_help"]),ctx,{"block":body_1},null).write("</div></div>");}function body_1(chk,ctx){return chk.write("<p class=\"help-block\">").reference(ctx._get(false, ["input_help"]),ctx,"h").write("</p>");}return body_0;})();
 // form_element_start.dust
(function(){dust.register("form_element_start",body_0);function body_0(chk,ctx){return chk.write("<div class=\"form-group ").reference(ctx._get(false, ["class"]),ctx,"h").write("\"><label ").exists(ctx._get(false, ["for"]),ctx,{"block":body_1},null).write("class=\"col-sm-3 control-label\">").helper("i18n",ctx,{},{"type":"labels","name":ctx._get(false, ["label"])}).write("</label><div class=\"col-sm-9\">");}function body_1(chk,ctx){return chk.write("for=\"").reference(ctx._get(false, ["for"]),ctx,"h").write("\"");}return body_0;})();
 // form_open.dust
(function(){dust.register("form_open",body_0);function body_0(chk,ctx){return chk.write("<form action=\"").reference(ctx._get(false,["frm","action"]),ctx,"h").write("\" method=\"").reference(ctx._get(false,["frm","method"]),ctx,"h").write("\"").exists(ctx._get(false, ["applyclass"]),ctx,{"block":body_1},null).exists(ctx._get(false, ["applyid"]),ctx,{"block":body_2},null).write(" accept-charset=\"utf-8\"><input type=\"hidden\" name=\"").reference(ctx._get(false, ["csrf_token_name"]),ctx,"h").write("\" value=\"").reference(ctx._get(false,["frm","csrf"]),ctx,"h").write("\" />");}function body_1(chk,ctx){return chk.write("class=\"").reference(ctx._get(false, ["applyclass"]),ctx,"h").write("\"");}function body_2(chk,ctx){return chk.write(" id=\"").reference(ctx._get(false, ["applyid"]),ctx,"h").write("\"");}return body_0;})();
 // reminder_description.dust
(function(){dust.register("reminder_description",body_0);function body_0(chk,ctx){return chk.reference(ctx._get(false, ["count"]),ctx,"h").write(" ").helper("select",ctx,{"block":body_1},{"key":body_5}).write(" ").helper("i18n",ctx,{},{"type":"labels","name":"before_start"});}function body_1(chk,ctx){return chk.helper("eq",ctx,{"block":body_2},{"value":"minutes"}).helper("eq",ctx,{"block":body_3},{"value":"hours"}).helper("eq",ctx,{"block":body_4},{"value":"days"});}function body_2(chk,ctx){return chk.helper("i18n",ctx,{},{"type":"labels","name":"minutes"});}function body_3(chk,ctx){return chk.helper("i18n",ctx,{},{"type":"labels","name":"hours"});}function body_4(chk,ctx){return chk.helper("i18n",ctx,{},{"type":"labels","name":"days"});}function body_5(chk,ctx){return chk.reference(ctx._get(false, ["unit"]),ctx,"h");}return body_0;})();
 // reminder_row.dust
(function(){dust.register("reminder_row",body_0);function body_0(chk,ctx){return chk.write("<div class=\"form-group row reminder\"><div class=\"col-md-12\"><div class=\"col-md-2\"><input type=\"hidden\" name=\"reminders[position][]\" value=\"").reference(ctx._get(false, ["position"]),ctx,"h").write("\" /><input class=\"form-control\" type=\"text\" name=\"reminders[count][]\" value=\"").exists(ctx._get(false, ["count"]),ctx,{"else":body_1,"block":body_2},null).write("\"/></div><div class=\"col-md-4\"><select class=\"form-control\" name=\"reminders[unit][]\"><option value=\"minutes\"").helper("eq",ctx,{"block":body_3},{"key":body_4,"value":"minutes"}).write(">").helper("i18n",ctx,{},{"type":"labels","name":"minutes"}).write("</option><option value=\"hours\"").helper("eq",ctx,{"block":body_5},{"key":body_6,"value":"hours"}).write(">").helper("i18n",ctx,{},{"type":"labels","name":"hours"}).write("</option><option value=\"days\"").helper("eq",ctx,{"block":body_7},{"key":body_8,"value":"days"}).write(">").helper("i18n",ctx,{},{"type":"labels","name":"days"}).write("</option><option value=\"weeks\"").helper("eq",ctx,{"block":body_9},{"key":body_10,"value":"weeks"}).write(">").helper("i18n",ctx,{},{"type":"labels","name":"weeks"}).write("</option><option value=\"months\"").helper("eq",ctx,{"block":body_11},{"key":body_12,"value":"months"}).write(">").helper("i18n",ctx,{},{"type":"labels","name":"months"}).write("</option></select></div><div class=\"col-md-4\"><p class=\"form-control-static\">").helper("i18n",ctx,{},{"type":"labels","name":"before_start"}).write("</p></div><div class=\"col-md-2\"><p class=\"form-control-static\"><a href=\"javascript:void(0)\" class=\"remove\"><i class=\"fa fa-remove fa-fw\"></i></a></p></div></div></div>");}function body_1(chk,ctx){return chk.write("0");}function body_2(chk,ctx){return chk.reference(ctx._get(false, ["count"]),ctx,"h");}function body_3(chk,ctx){return chk.write(" selected=\"selected\"");}function body_4(chk,ctx){return chk.reference(ctx._get(false, ["unit"]),ctx,"h");}function body_5(chk,ctx){return chk.write(" selected=\"selected\"");}function body_6(chk,ctx){return chk.reference(ctx._get(false, ["unit"]),ctx,"h");}function body_7(chk,ctx){return chk.write(" selected=\"selected\"");}function body_8(chk,ctx){return chk.reference(ctx._get(false, ["unit"]),ctx,"h");}function body_9(chk,ctx){return chk.write(" selected=\"selected\"");}function body_10(chk,ctx){return chk.reference(ctx._get(false, ["unit"]),ctx,"h");}function body_11(chk,ctx){return chk.write(" selected=\"selected\"");}function body_12(chk,ctx){return chk.reference(ctx._get(false, ["unit"]),ctx,"h");}return body_0;})();
 // reminders.dust
(function(){dust.register("reminders",body_0);function body_0(chk,ctx){return chk.section(ctx._get(false, ["visible_reminders"]),ctx,{"block":body_1},null).write("<p class=\"text-center\" id=\"no_reminders\">").helper("i18n",ctx,{},{"type":"messages","name":"info_noreminders"}).write("</p><div class=\"text-center\" id=\"reminders\">").section(ctx._get(false, ["reminders"]),ctx,{"block":body_2},null).write("</div><div class=\"text-right\"><a href=\"javascript:void(0)\" id=\"new_reminder\"><i class=\"fa fa-plus\"></i> ").helper("i18n",ctx,{},{"type":"labels","name":"add_reminder"}).write("</a></div><hr><small class=\"alert\">").helper("i18n",ctx,{},{"type":"messages","name":"info_reminders_no_effect_on_agendav"}).write("</small>");}function body_1(chk,ctx){return chk.write("<input type=\"hidden\" name=\"visible_reminders[").reference(ctx._get(true,[]),ctx,"h").write("]\" value=\"1\" />");}function body_2(chk,ctx){return chk.partial("reminder_row",ctx,null);}return body_0;})();
 // repeat_rule_form.dust
(function(){dust.register("repeat_rule_form",body_0);function body_0(chk,ctx){return chk.write("<input type=\"hidden\" name=\"rrule\" id=\"rrule\" value=\"").reference(ctx._get(false, ["rrule"]),ctx,"h").write("\">").partial("form_element_start",ctx,{"for":"frequency","label":"repeat"}).write("<select name=\"frequency\" class=\"repeat_type form-control\" id=\"repeat_frequency\"><option value=\"none\">").helper("i18n",ctx,{},{"type":"labels","name":"repeatno"}).write("</option><option value=\"daily\">").helper("i18n",ctx,{},{"type":"labels","name":"repeatdaily"}).write("</option><option value=\"weekly\">").helper("i18n",ctx,{},{"type":"labels","name":"repeatweekly"}).write("</option><option value=\"monthly\">").helper("i18n",ctx,{},{"type":"labels","name":"repeatmonthly"}).write("</option><option value=\"yearly\">").helper("i18n",ctx,{},{"type":"labels","name":"repeatyearly"}).write("</option></select>").partial("form_element_end",ctx,null).write("<div class=\"container_repeat_options\">").partial("form_element_start",ctx,{"for":"interval","label":"every"}).write("<div class=\"col-md-3\"><select name=\"repeat_interval\" class=\"secondary repeat_interval form-control\">").section(ctx._get(false, ["numbers1to60"]),ctx,{"block":body_1},null).write("</select></div>").partial("form_element_end",ctx,null).partial("form_element_start",ctx,{"for":"","label":"ends","class":"container_repeat_ends"}).write("<div class=\"row\"><div class=\"col-md-5\"><select name=\"ends\" class=\"repeat_ends form-control\"><option value=\"never\">").helper("i18n",ctx,{},{"type":"labels","name":"never"}).write("</option><option value=\"after\">").helper("i18n",ctx,{},{"type":"labels","name":"after"}).write("</option><option value=\"date\">").helper("i18n",ctx,{},{"type":"labels","name":"choose_date"}).write("</option></select></div><div class=\"col-md-5 container_repeat_ends_options\"><div class=\"container_repeat_count\"><div class=\"col-md-6\"><select name=\"repeat_count\" class=\"secondary repeat_count form-control\">").section(ctx._get(false, ["numbers1to60"]),ctx,{"block":body_2},null).write("</select></div><div class=\"col-md-6\"><p class=\"form-control-static\">").helper("i18n",ctx,{},{"type":"labels","name":"occurrences"}).write("</p></div></div><!-- container_recurence_count --><div class=\"generate-iso8601 container_repeat_until\"><input type=\"hidden\" class=\"generated\" name=\"repeat_until_date\" /><input type=\"text\" name=\"repeat_until\" class=\"repeat_until date form-control\" maxlength=\"10\" size=\"15\"/></div><!-- container_repeat_until --></div><!-- container_repeat_ends_options, inside container_repeat_ends --></div><!-- row, inside container_repeat_ends -->").partial("form_element_end",ctx,null).partial("form_element_start",ctx,{"for":"","label":"repeat_explanation"}).write("<p class=\"form-control-static\" id=\"repeat_explanation\"></p>").partial("form_element_end",ctx,null).write("</div>");}function body_1(chk,ctx){return chk.write("<option value=\"").reference(ctx._get(true,[]),ctx,"h").write("\">").reference(ctx._get(true,[]),ctx,"h").write("</option>");}function body_2(chk,ctx){return chk.write("<option value=\"").reference(ctx._get(true,[]),ctx,"h").write("\">").reference(ctx._get(true,[]),ctx,"h").write("</option>");}return body_0;})();