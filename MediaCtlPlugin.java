package __PKG__;

import android.content.Intent;
import androidx.core.content.ContextCompat;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "MediaCtl")
public class MediaCtlPlugin extends Plugin {
    static MediaCtlPlugin inst;

    @Override
    public void load() {
        inst = this;
    }

    @PluginMethod
    public void update(PluginCall call) {
        Intent i = new Intent(getContext(), MediaService.class);
        i.putExtra("title", call.getString("title", ""));
        i.putExtra("text", call.getString("text", ""));
        i.putExtra("playing", Boolean.TRUE.equals(call.getBoolean("playing", false)));
        try {
            ContextCompat.startForegroundService(getContext(), i);
        } catch (Exception e) {
            try {
                getContext().startService(i);
            } catch (Exception e2) {
                // ignore: app not allowed to start the service right now
            }
        }
        call.resolve();
    }

    @PluginMethod
    public void stop(PluginCall call) {
        try {
            getContext().stopService(new Intent(getContext(), MediaService.class));
        } catch (Exception e) {
            // ignore
        }
        call.resolve();
    }

    @PluginMethod
    public void handoff(PluginCall call) {
        try {
            Intent i = new Intent(getContext(), MediaService.class);
            i.putExtra("title", call.getString("title", ""));
            i.putExtra("text", call.getString("text", ""));
            i.putExtra("playing", true);
            i.putExtra("base", call.getString("base", ""));
            i.putExtra("n", call.getInt("n", 1));
            i.putExtra("pos", call.getInt("pos", 0));
            i.putExtra("rate", call.getFloat("rate", 1f));
            i.putExtra("rec", call.getString("rec", ""));
            i.putExtra("names", toArr(call.getArray("names")));
            ContextCompat.startForegroundService(getContext(), i);
            call.resolve();
        } catch (Exception e) {
            call.reject("handoff failed");
        }
    }

    @PluginMethod
    public void handoffAy(PluginCall call) {
        try {
            Intent i = new Intent(getContext(), MediaService.class);
            i.putExtra("title", call.getString("title", ""));
            i.putExtra("text", call.getString("text", ""));
            i.putExtra("playing", true);
            i.putExtra("urls", toArr(call.getArray("urls")));
            i.putExtra("ai", call.getInt("ai", 1));
            i.putExtra("rp", call.getInt("rp", 1));
            i.putExtra("loop", Boolean.TRUE.equals(call.getBoolean("loop", false)));
            i.putExtra("lf", call.getInt("lf", 1));
            i.putExtra("lt", call.getInt("lt", 1));
            i.putExtra("rate", call.getFloat("rate", 1f));
            i.putExtra("stitle", call.getString("stitle", ""));
            i.putExtra("rec", call.getString("rec", ""));
            ContextCompat.startForegroundService(getContext(), i);
            call.resolve();
        } catch (Exception e) {
            call.reject("handoff failed");
        }
    }

    @PluginMethod
    public void takeback(PluginCall call) {
        JSObject o = new JSObject();
        MediaService s = MediaService.inst;
        if (s != null) {
            int[] r = s.takeBack();
            o.put("n", r[0]);
            o.put("pos", r[1]);
            o.put("playing", r[2] == 1);
            o.put("ay", r[3] == 1);
            o.put("ok", true);
        } else {
            o.put("ok", false);
        }
        call.resolve(o);
    }

    private static String[] toArr(org.json.JSONArray a) {
        if (a == null) return new String[0];
        String[] r = new String[a.length()];
        for (int k = 0; k < r.length; k++) r[k] = a.optString(k, "");
        return r;
    }

    static void emit(String action) {
        if (inst != null) {
            JSObject o = new JSObject();
            o.put("action", action);
            inst.notifyListeners("action", o);
        }
    }
}
