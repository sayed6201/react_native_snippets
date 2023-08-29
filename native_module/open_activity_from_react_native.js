
// =============================================================
//create Activity class with XML UI
//Than call this from
// =============================================================

@ReactMethod
void navigateToExample() {
    ReactApplicationContext context = getReactApplicationContext();
    Intent intent = new Intent(context, NativeUI.class);
    context.startActivity(intent);
}