import Layout from "@/components/layout/Layout";
import FirebaseCrud from "lib/firebase/crud";
import CollectionNames from "lib/firebase/colNames";

const Application = FirebaseCrud(CollectionNames.APPLICATION);
const BusinessOwner = FirebaseCrud(CollectionNames.BUSINESS_OWNER);

async function getAllApplication() {
  try {
    const data = await Application.readAll();
    return data;
    console.log(data);
    alert(JSON.stringify(data));
  } catch (error) {
    alert(error);
  }
}

async function updateApplication(
  id: any,
  applicationTo: string,
  business_name: string,
) {
  try {
    await Application.update(id, { status: "approved" });

    if (applicationTo === "dti") {
      await BusinessOwner.update(business_name, { dti_valid: true });
    }
    if (applicationTo === "bir") {
      await BusinessOwner.update(business_name, { bir_valid: true });
    }
    if (applicationTo === "mayor") {
      await BusinessOwner.update(business_name, { mayor_valid: true });
    }

    alert("updated");
  } catch (error) {
    alert(error);
  }
}

export default function Request() {
  return (
    <Layout>
      <h1>Request</h1>
    </Layout>
  );
}
